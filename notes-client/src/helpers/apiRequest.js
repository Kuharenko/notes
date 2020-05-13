import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // todo: process.env.VUE_APP_API_URL
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default apiRequest;
