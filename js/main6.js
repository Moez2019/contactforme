console.log("Firebase workshop 06 04 2019");
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzYvGFeL3-iI863joUkB1JxF9MLY0DkZI",
    authDomain: "contactforme1.firebaseapp.com",
    databaseURL: "https://contactforme1.firebaseio.com",
    projectId: "contactforme1",
    storageBucket: "contactforme1.appspot.com",
    messagingSenderId: "866771023341"
  };
  firebase.initializeApp(config);
  // create a collection(NoSQL) (table (SQL)) in our Firabase database


  var users = firebase.database().ref();



document.getElementById("submit").addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    
    saveUser(firstName, lastName,age, email);

    alertUser();
    
    document.getElementById("formulaire").reset();


}

function saveUser(firstName, lastName, age, email) {
    var newUser = users.push();
    newUser.set({
        prenom: firstName,
         nom: lastName,
         age: age,
         emailAddress: email
    }) 
}

function alertUser() {
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){ 
        document.getElementById("alert").style.display = "none"; 
    } , 3000)
}
