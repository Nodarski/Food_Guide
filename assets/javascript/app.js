
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
// HOVER FOR TILES
// HOVER FOR TILES
// HOVER FOR TILES
$(".hoverThis").hover(function(){
// Fill Vertical height animation
 $(this).animate().css("height","100vh")
// Scroll page to fit div inside
 $('html,body').animate({
  scrollTop: $(this).offset().top},'slow');
// Add any new animations here
// Add any new animations here


 }, function(){
  //  this functions resets when 'un-hovered'
  //  this functions resets when 'un-hovered'
  $(this).animate().css("height","200px");

 });
  
