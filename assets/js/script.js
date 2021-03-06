var today = moment().format("dddd Do MMMM YYYY ");
var currentTime = moment();
var currentHour = moment().format("k");

$("#currentDay").append(today)
$(document).ready(function() {
    
});

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-5 .time-block").val(localStorage.getItem("05"));
  $("#hour-6 .time-block").val(localStorage.getItem("06"));
  $("#hour-7 .time-block").val(localStorage.getItem("07"));
  $("#hour-8 .time-block").val(localStorage.getItem("08"));
  $("#hour-9 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
  $("#hour-18 .time-block").val(localStorage.getItem("18"));
  $("#hour-19 .time-block").val(localStorage.getItem("19"));
  $("#hour-20 .time-block").val(localStorage.getItem("20"));
  $("#hour-21 .time-block").val(localStorage.getItem("21"));
  $("#hour-22 .time-block").val(localStorage.getItem("22"));
  $("#hour-23 .time-block").val(localStorage.getItem("23"));
  $("#hour-00 .time-block").val(localStorage.getItem("00"));
  $("#hour-1 .time-block").val(localStorage.getItem("01"));
  $("#hour-2 .time-block").val(localStorage.getItem("02"));
  $("#hour-3 .time-block").val(localStorage.getItem("03"));
  $("#hour-4 .time-block").val(localStorage.getItem("04"));