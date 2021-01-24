//declared variable for current date
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// selected currentDay p id to display the current date
$("#currentDay").html(currentDay);

//fucntionality for entire document
$(document).ready(function(){
 //gets local storage from the val of the timeblock 8 am
 $("#hour-8 .description").val(localStorage.getItem("hour-8"));
 $("#hour-9 .description").val(localStorage.getItem("hour-9"));
 $("#hour-10 .description").val(localStorage.getItem("hour-10"));
 $("#hour-11 .description").val(localStorage.getItem("hour-11"));
 $("#hour-12 .description").val(localStorage.getItem("hour-12"));
 $("#hour-13 .description").val(localStorage.getItem("hour-13"));
 $("#hour-14 .description").val(localStorage.getItem("hour-14"));
 $("#hour-15 .description").val(localStorage.getItem("hour-15"));
 $("#hour-16 .description").val(localStorage.getItem("hour-16"));
 $("#hour-17 .description").val(localStorage.getItem("hour-17"));
 $("#hour-18 .description").val(localStorage.getItem("hour-18"));
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
            var time = parseInt($(this).attr("id").split("-")[1]);

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
 