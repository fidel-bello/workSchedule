//declared variable for current date
var currentDay = moment().format("dddd, MMMM Do YYYY");
// selected currentDay p id to display the current date
$("#currentDay").html(currentDay);

//fucntionality for entire document
$(document).ready(function(){
    //onlick on save btn
    $("saveBtn").on("click", function(){
        //gets values from description
        var input = $(this).sibling("description").val();
        var time = $(this).parent().attr("id");
        //save user input in local storage and time
        localStorage.setItem(time, input);
    })
});