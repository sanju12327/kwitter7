// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBPpjT_TRL5fVduRIuqaG-bGC9Sf4dBRc",
    authDomain: "kwitter-e75d1.firebaseapp.com",
    databaseURL: "https://kwitter-e75d1-default-rtdb.firebaseio.com",
    projectId: "kwitter-e75d1",
    storageBucket: "kwitter-e75d1.appspot.com",
    messagingSenderId: "116683875886",
    appId: "1:116683875886:web:ea641fecb7f470cc66e1bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



  function addRoom () 
  {
   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function log_out() 
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}