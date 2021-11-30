// var habiter = {
//   "habit": "empty",
//   "days": 0,
//   "counter": 0
// };
//
// $("#main").load("about.html");
// // console.log("hello");
// $("#toStart").click(function() {
//   $("#main").load("start.html");
//   console.log(1);
// });

var counter = 0;
var habit = "empty";
var days = 0;
$(document).ready(function() {
  // $("form").on('submit',function(event) {
  //   input = document.getElementById("habitInput").value;
  //   console.log(input);
  $("#amazon").hide();
  $("#progress").hide();

});
if (document.getElementById("amazonLink") != null) {
  document.getElementById("amazonLink").href += habit;
}

$("#yes").click(function() {
  counter++;
  console.log(counter);
  $("#yes").hide();
  $("#no").hide();
  $("#amazon").show();
});

$("#no").click(function() {
  console.log(counter);
  $("#yes").hide();
  $("#no").hide();
  $("#amazon").show();
});

$("#amazonLink").click(function() {
  console.log(counter);
  $("#nothx").hide();
  $("#progress").show();
});
$("#nothx").click(function() {
  console.log(counter);
  $("#nothx").hide();
  $("#progress").show();
});
