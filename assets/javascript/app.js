
var database = firebase.database();
var rootRef = firebase.database().ref();

console.log(rootRef)

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