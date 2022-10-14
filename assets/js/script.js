$(document).ready(function() {

// variables to manipulate DOM
var saveBtnEl = $(".saveBtn");
var taskEntry = $("textarea");
var timeBlockEl = $(".time-block");


//creates an array of timeblocks
// const timeBlockArray = ["9AM", ] 

// adds current date using Moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// creates variable storing current hour in military format
var now = moment().hours();

// creates a function to color code timeblocks in relation to current hour
var colorCode = function() {

    $(".time-block").each(function () {
      console.log($(this));
      console.log(now);  
        
        if (now > parseInt($(this).attr('id').split('hour-')[1])) {
            $(this).addClass('past');
        } else if (now === parseInt($(this).attr('id').split('hour-')[1])) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
};
colorCode();




// store textarea entries into local storage
// $( this ).text() 

function saveTask() {
    console.log("click");
    localStorage.setItem("#hour-*", taskEntry.text);
    console.log(taskEntry);
}

saveTask();

// add event listener to save buttons
saveBtnEl.on("click", saveTask);

// retrieve tasks saved in local storage after page refresh
$("#hour-*").val(localStorage.getItem("hour-*"));

})