// variables to manipulate DOM
var saveBtnEl = $(".saveBtn");
var taskEntry = $("textarea");
var timeBlockEl = $("time-block");


//creates an array of timeblocks
// const timeBlockArray = ["9AM", ] 

// adds current date using Moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// create a function using Moment's get time command to style time block colors
var now = moment().hour(Number).format("HH"); {
    console.log(now);
    // for (var = i; i < 0; i++); {
    //     if (now === timeBlockEl.value) {
    //         this.setAttribute("class", "present");
    //     }
    //     else if (now > timeBlockEl.value) {
    //         this.setAttribute("class", "past");
    //     }
    //     else {
    //         this.setAttribute("class", "future");
    //     }
    // }

  

};





// store textarea entries into local storage
function saveTask() {
    console.log("click");
    localStorage.setItem("#hour-*", taskEntry);
    console.log(taskEntry);
}

// add event listener to save buttons
saveBtnEl.on("click", saveTask);

// retrieve tasks saved in local storage after page refresh
$("#hour-*").val(localStorage.getItem("hour-*"));