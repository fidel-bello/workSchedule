//declared variable for current date
var currentDay = moment().format("dddd, MMMM Do YYYY");
// selected currentDay p id to display the current date
$("#currentDay").html(currentDay);

//fucntionality for entire document
$(document).ready(function(){
    //onlick on save btn
    $("saveBtn").on("click", function(){
        //gets values from description
        var now = moment().format("H A");
        var input = $(this).sibling("description").val();
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
 