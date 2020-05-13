<template>

  <div>
    <form v-on:submit.prevent="submit">
      <input id="new_note" name="new_note" v-model="new_note"/>
      <button type="submit">store</button>
    </form>

    <h1>Notes</h1>
    <div v-for="item in getNotes">
      <p>{{item.note}}</p>
      <button v-on:click="deleteNote(item.id)">delete</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Note',
    data() {
      return {
        notes: [],
        new_note: ''
      }
    },
    mounted() {
      this.$store.dispatch('fetchList');
    },
    computed: {
      getNotes() {
        return this.$store.getters.getNotes;
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('storeNew', {note: this.new_note});
        this.new_note = '';
      },
      deleteNote(id) {
        this.$store.dispatch('deleteNote', {id});
      }
    }
  }
</script>

