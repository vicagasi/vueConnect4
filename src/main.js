import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var app = new Vue({
  el: "#app",
  data: {
      title: 'Connect 4',
      Player1: 'Lucky',
      Player2: 'Victor',
  },

  methods: {
    change1: function (event) {
      this.Player1 = event.target.value
    },

    change2: function (event) {
      this.Player2 = event.target.value
    }
  }

  });


var firebaseConfig = {

  var: appI = new Vue({
    el: "#app",
    data: {
        title: 'Connect 4',
        Player1: "Lucky",
        Player2: "Victor",
    },
  
    methods: {
      change1: function (event) {
        console.log("change1")
        this.Player1 = "Bob"
        setData(DB_PATH + "appI", appI.data.Player1)
      },
  
      //storageBucket: "connect4project-1bc75.appspot.com",
      change2: function (event) {
        this.Player2 = event.target.value
        setData(DB_PATH + "appI", appI.data)
      },
    }
  }),

  messagingSenderId: "1068821387814",
  apiKey: "AIzaSyCam4uA1VLJIZU_V7EroIyS5onMgmFzKOc",
  authDomain: "connect4project-1bc75.firebaseapp.com",
  projectId: "connect4project-1bc75",
  storageBucket: "connect4project-1bc75.appspot.com",
  messagingSenderId: "597315920347",
  appId: "1:597315920347:web:b47e9d7d4c1cdb5f1d47fe",

  databaseURL: "https://connect4project-1bc75-default-rtdb.firebaseio.com/",
  //connect4project-1bc75.firebaseapp.com
  //storageBucket: "test-csci2022-luckywoods.appspot.com"
  
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

const app = createApp(App);

app.use(router);

app.mount("#app");