import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-dff12.cloudfunctions.net/api" //API (cloud function url)
});

export default instance;

//Prod
//https://us-central1-clone-dff12.cloudfunctions.net/api

//Local
//http://localhost:5001/clone-dff12/us-central1/api
