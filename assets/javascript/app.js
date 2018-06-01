
// Firebase

var database = firebase.database();
var rootRef = firebase.database().ref();
var newUser = rootRef.push();
var userName = $("#username-bar")

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

var edamamAppID = 'd5b34925';
var edamamAPIkey = '66d13e8235fc1808e58f2957a01df7f8';
var edamamSearch = '';
var edamamQuery = 'https://api.edamam.com/api/food-database/parser?ingr=' + edamamSearch + '&app_id=' + edamamAppID + '&app_key=' + edamamAPIkey;

$('#search-area').on('click', 'search-button', function() {
  event.preventDefault();
  edamamSearch = encodeURIComponent($('#search-bar').value.trim());
  $.ajax({
    url: edamamQuery,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
  })
  
});