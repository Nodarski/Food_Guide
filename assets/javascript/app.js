
var database = firebase.database();
var rootRef = firebase.database().ref();
var newUser = rootRef.push();
var userName = "test"

const auth = firebase.auth();

auth.signinWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUSer => {});





console.log(rootRef)

  // var title = "space+jam";
  //   var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   })(function(response) {
  //     console.log(response);
  //     console.log(response.Runtime);
  //   });


  function testFun(){
    newUser.set({
      name: userName,
      
    });
  }
  testFun();