//ADD YOUR FIREBASE LINKS HERE
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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}