<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAndUpdateRequest;
use App\Note;


class NoteController extends Controller
{
    public function index()
    {
        return Note::all();
    }

    public function store(StoreAndUpdateRequest $request)
    {
        return Note::create($request->validated());
    }

    public function show(Note $note)
    {
        return $note;
    }

    public function update(StoreAndUpdateRequest $request, Note $note)
    {
        $note->update($request->validated());
        return $note->refresh();
    }

    public function destroy(Note $note)
    {
        return response()->json(['status' => (boolean) $note->delete()]);
    }
}
