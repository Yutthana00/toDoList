var today = moment().format("dddd Do MMMM YYYY ");
var currentTime = moment();
var currentHour = moment().format("k");

$(document).ready(function(){
});

$("#currentDay").append(today)

let taskInput = $(".row input[type=text]");

$(taskInput).each(function() {
    
    var taskInputNumber = parseInt($(this).attr("id"));


    if (taskInputNumber < currentHour) {
        $(this).addClass("past")
    }
    else if (taskInputNumber == currentHour) {
        $(this).addClass("present")
    }
    else if (taskInputNumber > currentHour) {
        $(this).addClass("future")
}
});

$(".savebtn").click(function(){
    event.preventDefault();

    let hrtask = $(this).attr("hour")
    let storeTask = $(this).prev().val();

    localStorage.setItem(hrtask, JSON.stringify(storeTask));
});

$("#05").val(localStorage.getItem("05"))
$(".06").val(localStorage.getItem("06"))




// let clearbtn = document.querySelector('button');
// let inputs = document.querySelectorAll('.textarea');

// clearbtn.addeventlistener('click', () => {
//     inputs.forEach(input => textarea.value = '');
// });