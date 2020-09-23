//   var myName=prompt("enter ur name");
var list = document.getElementById("list");
//  let realTime =()=>{

//  firebase.database().ref("message").on("child_added",function(data){

//   });

//}

let sendMessage = () => {
  var input = document.getElementById("text");
  var key = firebase.database().ref("message").push().key;
  var todo = {
    message: input.value,
    key: key,
  };
  firebase.database().ref("message").set(todo);
};

let signPage = () => {
  window.location = "sign.html";
};

let signInWith = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  console.log(email.value)
  console.log(password)
  
//   firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
// .then((result)=>{
    
//     console.log(result)
// })
// .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//     // ...
//   });

}


let login = () => {
  var email = document.getElementById("mail");
  var pass = document.getElementById("pass");
  console.log(email.value);
  console.log(pass.value);

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, pass.value)
    .then((result) => {
      window.location = "chat.html";

      //    console.log(result)
      //    console.log(email.value)
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
};

let signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      window.location = "index.html";
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};
