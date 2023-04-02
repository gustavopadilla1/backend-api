const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCJw9bMj0lveXBabB7-9uozWYLXInF4s9w",
    authDomain: "mystore-gp.firebaseapp.com",
    databaseURL: "https://mystore-gp-default-rtdb.firebaseio.com",
    projectId: "mystore-gp",
    storageBucket: "mystore-gp.appspot.com",
    messagingSenderId: "286894550549",
    appId: "1:286894550549:web:13876d5f4c1a0163afa81c",
    measurementId: "G-FHKJ0DRC2D"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const user = db.collection('user');
const product = db.collection("products");

module.exports =  product, user;
