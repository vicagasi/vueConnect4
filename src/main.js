import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {

    apiKey: "AIzaSyClqrbbfZZEWZs8bvPs2b4aJSzxbjFVjxQ",
  
    authDomain: "vueconnect4.firebaseapp.com",
  
    projectId: "vueconnect4",
  
    storageBucket: "vueconnect4.appspot.com",
  
    messagingSenderId: "1068821387814",
  
    appId: "1:1068821387814:web:ce2ea81f6cfffcd444e4e7"
  
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db }; */

const app = createApp(App);

app.use(router);

app.mount("#app");
