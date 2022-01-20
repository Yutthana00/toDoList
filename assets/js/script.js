var today = moment().format("dddd Do MMMM YYYY ");
var currentTime = moment();
var currentHour = moment().format("k");

$(document).ready(function() {
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

var checkPrevious = JSON.parse(localStorage.getItem("dayPlanner"));
	if (checkPrevious !== null) {
	planWorkday = checkPrevious;

localStorage.setItem("dayPlanner", JSON.stringify(planWorkday));

// var saveBtn = document.querySelector(".#05");
// var savedTask = document.querySelector(".name");

// form.addEventListener("button", function(event) {
//         event.preventDefault();
// });

// saveBtn.addEventListener('click', function (){
//     localStorage.setItem('savedTask', savedTask.value);
    
//  });
// save data to local storage


    
// $("#savebtn").click(function() {
//     event.preventDefault();

//     let hrtask = $(this).attr("hour")
//     let storeTask = $(this).prev().val();

//     localStorage.setItem(hrtask, JSON.stringify(storeTask));
// });

$("#05").val(localStorage.getItem("05"))



//     var addTaskEl = $('.container');

//     function handleFormSubmit(event) {
//         event.preventDefualt();

//         var savedTask = $('input[name="task-input"]').val();

//         if (!savedTask) {
//             console.log('Add your task');
//             return;
//         }


//     }

// shoppingFormEl.on('submit', handleFormSubmit);





// clear button

// let clearbtn = document.querySelector('button');
// let inputs = document.querySelectorAll('.textarea');

// clearbtn.addeventlistener('click', () => {
//     inputs.forEach(input => textarea.value = '');
// });