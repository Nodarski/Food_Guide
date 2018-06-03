
var userIngrList = [];

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
/*
var foodAppID = 'd5b34925';
var foodAPIkey = '66d13e8235fc1808e58f2957a01df7f8';
var foodSearch = '';

$('#search-area').on('click', '#search-button', function() {
  event.preventDefault();
  foodSearch = encodeURIComponent($('#search-bar').val().trim());
  var foodQuery = 'https://api.edamam.com/api/food-database/parser?app_id=' + foodAppID + '&app_key=' + foodAPIkey + '&ingr=' + foodSearch;
    $.ajax({
      url: foodQuery,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
      for (var i = 0; i < response.hints.length; i++) {
        var temp = response.hints[i].food.label;
        if (temp.indexOf(' ') === -1) {
          var item = $('<h5>').text(temp.toLowerCase());
          $('#user-ingredients').append(item);
          userIngrList.push(item.text());
          console.log(userIngrList);
          i = response.hints.length;
        }
      }
    });
});
*/

$('#search-area').on('click', '#search-button', function() {
  event.preventDefault();
  var temp = $('#search-bar').val();
  var item = $('<h5>').text(temp.toLowerCase());
  $('#user-ingredients').append(item);
  userIngrList.push(item.text());
  console.log(userIngrList);
});

// Recipe Search API

var recipeAppID = 'f5710785';
var recipeAPIkey = '8392091036762a8454001f22166942cf';
var recipeSearch = '';

$('.container-fluid').on('click', '#recipe-button', function() {
  for (var i = 0; i < userIngrList.length; i++) {
    var temp = userIngrList[i] + ' '
    recipeSearch += temp;
  }
  recipeSearch = encodeURIComponent(recipeSearch.trim());
  console.log(recipeSearch);
  var recipeQuery = 'https://api.edamam.com/search?app_id=' + recipeAppID + '&app_key=' + recipeAPIkey + '&q=' + recipeSearch;
  $.ajax({
    url: recipeQuery,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    console.log(recipeQuery);
  });
});

// Logo

function onLoadFunctions(){
  $("#foodLogo").animate({
    left: "15.5%"
  },400).fadeIn();
  $("#tacularLogo").animate({
    left: "48.5%"
  },400);
  $("#logoBackPlate").animate({
    opacity: "1"
  
  });

}