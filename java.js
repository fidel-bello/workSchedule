//declared variable for current date
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// selected currentDay p id to display the current date
$("#currentDay").html(currentDay);

//fucntionality for entire document
$(document).ready(function(){
 //gets local storage from the val of the timeblock 8 am
 $("#hour8 .description").val(localStorage.getItem("hour8"));
 $("#hour9 .description").val(localStorage.getItem("hour9"));
 $("#hour10 .description").val(localStorage.getItem("hour10"));
 $("#hour11 .description").val(localStorage.getItem("hour11"));
 $("#hour12 .description").val(localStorage.getItem("hour12"));
 $("#hour13 .description").val(localStorage.getItem("hour13"));
 $("#hour14 .description").val(localStorage.getItem("hour14"));
 $("#hour15 .description").val(localStorage.getItem("hour15"));
 $("#hour16 .description").val(localStorage.getItem("hour16"));
 $("#hour17 .description").val(localStorage.getItem("hour17"));
    //onlick on save btn
    $(".saveBtn").on("click", function(){
        //gets values from description
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save user input in local storage and time
        localStorage.setItem(time, input);
    })
    //function to add color according to css class
    function addColor(){
        
        //current hours
        var now = moment().hour();

        //looping time blcosk
        $(".time-block").each(function (){
            var time = parseInt($(this).attr("id").split("hour")[1]);

            //checking if time of the block is less than current time then add the css class past
            if (time < now) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
                //is = time now than add css class present
            } else if (time === now){
                $(this).removeClass("past");
                $(this).removeclass("future");
                $(this).addClass("present");

                //if not any above than future
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }


    addColor()
});
 