let signup =()=>{
    window.location="sigup.html"
}


let signUp=()=>{
    var email=document.getElementById("mail");
    var password=document.getElementById("pass")
   

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log(result)
        // window.location="chat.html"

    })
            .catch(function(error) {{
                alert(error)     }
    
        // ...
      });


}


let log =()=>{
    var email=document.getElementById("loginMail");
    var password=document.getElementById("loginPass")
    

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
         window.location="chat.html"
        
    //    console.log(result) 
    //    console.log(email.value)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ...
      });
      
    }
    
    
var sendMessage =()=>{
    var input=document.getElementById("message");
    firebase.database().ref("message").push().set({
        //  send:mail.value,
        msg:input,
    });
}


  //   var myName=prompt("enter ur name");
  var list =document.getElementById("list");
firebase.database().ref("message").on("child_added",function(data){
    var li=document.createElement("li");
    var liText=document.createTextNode(data.val().value);
     li.appendChild(liText)
    list.appendChild(li)
   
 })


let signOut =()=>{
    firebase.auth().signOut()
    .then(function() {
        window.location="index.html"
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}

