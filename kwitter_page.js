//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDa8jGr4Sx38PDeqRYmjHlsrEck3h3B894",
    authDomain: "lets-chat-app-5993b.firebaseapp.com",
    databaseURL: "https://lets-chat-app-5993b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-5993b",
    storageBucket: "lets-chat-app-5993b.appspot.com",
    messagingSenderId: "797495384808",
    appId: "1:797495384808:web:00d02b9dc454d49966c75d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}k
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}