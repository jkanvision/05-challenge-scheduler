// variables to manipulate DOM
var saveBtnEl = $(".saveBtn");
var taskEntryEl = $("textarea[name=entry1]");
var timeBlockEl = $(".time-block");

// get stored tasks from local storage
$("textarea[name=entry1]").val(localStorage.getItem("task1"));

// add event listener to save buttons
saveBtnEl.on("click", function (event) {
    event.preventDefault();
    var userEntry = taskEntryEl.val();

    // store textarea entries into local storage
    localStorage.setItem("task1", userEntry);
});

// adds current date using Moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// creates variable storing current hour in military format
var now = moment().hours();

// creates a function to color code timeblocks in relation to current hour
var colorCode = function () {

    $(".time-block").each(function () {
        if (now > parseInt($(this).attr('id').split("hour-")[1])) {
            $(this).addClass("past");
        } else if (now === parseInt($(this).attr('id').split("hour-")[1])) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};
colorCode();
