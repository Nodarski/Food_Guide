
// Firebase

var database = firebase.database();
var rootRef = firebase.database().ref();
var newUser = rootRef.push();
var userName = "test"

var email = "placeholder@email.com"
var pass = "randomPass"

console.log(rootRef)

const auth = firebase.auth();

//auth.signinWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUSer => {});

function openTab(fruits) {
  var i, x;
  x + document.getElementsByClassName("expandTab");
  for (i=0; i < x.length; i++) {
    x[i].style.display= "none";
  }
  document.getElementById(fruits).style.display ="block";
}

// Food Search API

var edamamAppID = '24041931';
var edamamAPIkey = 'b2daf41cdcd9d9cbf667f4176e7bea92';
var edamamFoodSearch = '';

$('#search-area').on('click', '#search-button', function() {
  event.preventDefault();
  edamamFoodSearch = encodeURIComponent($('#search-bar').val().trim());
  var edamamFoodQuery = "https://api.edamam.com/api/nutrition-data?app_id=" + edamamAppID + "&app_key=" + edamamAPIkey + "&ingr=" + edamamFoodSearch;
      $.ajax({
      url: edamamFoodQuery,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
    });
});