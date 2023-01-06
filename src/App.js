import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBeV0uObD2g8vVjHQKblTX_sMH2iD4vDBQ",
  authDomain: "cookies-25172.firebaseapp.com",
  projectId: "cookies-25172",
  storageBucket: "cookies-25172.appspot.com",
  messagingSenderId: "474152999174",
  appId: "1:474152999174:web:94f7f4e4d98adad7966687",
  measurementId: "G-R1Z36B0QTG"
})

const db = firebase.firestore();
const increment = firebase.firestore.FieldValue.increment(1);

function hide(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

function show(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'block';
  }
}

async function allow() {
  db.collection("cookie").doc("allow").update({"count": increment});
  hide(document.querySelectorAll(".cookie-consent-container"));
  show(document.querySelectorAll(".text-behind"));
  document.getElementById("simple-cookie-consent").style.background = "white";
}

async function deny() {
  db.collection("cookie").doc("deny").update({"count": increment});
  hide(document.querySelectorAll(".cookie-consent-container"));
  show(document.querySelectorAll(".text-behind"));
  document.getElementById("simple-cookie-consent").style.background = "white";
}

function policy() {
  db.collection("cookie").doc("policy").update({"count": increment});
  alert("Well done for going to look at the cookie policy, you are very internet wise.")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="simple-cookie-consent" style={{display: "gray"}}>
          <div className="text-behind" style={{display: "none"}}>
          <h1>Cookies Case Study</h1>
          <p>This website was actually a test to see if you would automatically click "allow all cookies".</p>
          <p>Thank you for participating in this case study.</p>
          <p>(p.s. no cookies were harmed in the making of this website)</p>
          <img src="https://i.scdn.co/image/ab6761610000e5eba3a7cba23d68a4e73c3b8155" alt"Cookie monster"></img>
