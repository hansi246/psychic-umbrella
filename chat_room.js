const firebaseConfig = {
    apiKey: "AIzaSyCxeulqEw8B8h3v6mGYOv8Yd6elUGuQglE",
    authDomain: "kwitter-1-eba95.firebaseapp.com",
    databaseURL: "https://kwitter-1-eba95-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-eba95",
    storageBucket: "kwitter-1-eba95.appspot.com",
    messagingSenderId: "643922053009",
    appId: "1:643922053009:web:42047683649375458dfc30",
    measurementId: "G-Q66F10VQVZ"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
