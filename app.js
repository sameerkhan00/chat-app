//  var myName=prompt("enter ur name");
var list=document.getElementById("list_items");
 firebase.database().ref("message").on('child_added',function(data){
 var li=document.createElement("li")

 var liText=document.createTextNode(data.val().value)
 li.appendChild(liText)
 list.appendChild(li)

// //delte button
//     var delbtn=document.createElement("button");
//     var btn=document.createTextNode("Delete")


//     delbtn.setAttribute("Class","btn-edit");
//     delbtn.setAttribute("onclick","delete_item(this)")

//     delbtn.appendChild(btn)

//     //edit button
//     var editbtn=document.createElement("Button");
//     var e_btn=document.createTextNode("Edit")
//     editbtn.appendChild(e_btn);
//     editbtn.setAttribute("Class","btn-edit")
//     editbtn.setAttribute("onclick","edit_text(this)")



//   li.appendChild(editbtn)
//   li.appendChild(delbtn)
  input.value=""
})
// let delete_item =(e)=>{
//   firebase.database().ref('message').e.remove()
//    (e.parentNode.remove());
// }

// function edit_text(e){

//   var val=prompt("Enter update",e.parentNode.firstChild.nodeText)
//   var data={
//     value:val,
//     key:e.key
//   }
//   firebase.database().ref('mydata').child(e.key).set(data)
//   e.parentNode.firstChild.nodeValue=val
// }
let sendMessage = () => {
  var inputItem=document.getElementById('input');   
  
  var key=firebase.database().ref("message").push().key
  var todo = {
    value: inputItem.value
    
  }
   firebase.database().ref("message/"+key).set(todo)   
  
}

let signPage = () => {
  window.location = "sign.html";
};

let signInWith =()=> {
  let email = document.getElementById("name");
  let password = document.getElementById("roll");
  console.log(email.value);
  console.log(password.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((result)=>{
    window.location="chat.html"
      // console.log(result)
  })
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });
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

let facebook =()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
  
  
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
  window.location="chat.html"
    console.log(user)
    // ...
  }).catch(function(error) {
    
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("error"+errorMessage)
    // ...
  });

}
let gmail =()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location="chat.html"
    console.log(user)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
    // ...
  });
}
