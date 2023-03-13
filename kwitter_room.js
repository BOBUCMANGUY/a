

const config = {
  apiKey: "AIzaSyAd2-c3y7CdmjLb0fUZm31uqwGDTCTncic",
  authDomain: "test-project-pratice.firebaseapp.com",
  databaseURL: "https://test-project-pratice-default-rtdb.firebaseio.com",
  projectId: "test-project-pratice",
  storageBucket: "test-project-pratice.appspot.com",
  messagingSenderId: "373970629913",
  appId: "1:373970629913:web:5ccd990e3d9c112cf28188"
};

firebase.initializeApp(config);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
