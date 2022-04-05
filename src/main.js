import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyClqrbbfZZEWZs8bvPs2b4aJSzxbjFVjxQ",
    authDomain: "vueconnect4.firebaseapp.com",
    projectId: "vueconnect4",
    storageBucket: "vueconnect4.appspot.com",
    messagingSenderId: "1068821387814",
    appId: "1:1068821387814:web:ce2ea81f6cfffcd444e4e7"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");