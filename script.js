$(document).ready(function () {

    var currentDate = moment();
    $("#currentDay").text(currentDate);
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var input = $(this).siblings(".description").val();
        localStorage.setItem(time, input)
    })

    $(".time-block").each(function () {
        var currentHour = moment().hours();
        var timeId = $(this).attr("id");
        var timeHour = timeId.slice(5);


        if (timeHour < currentHour) {
            $(this).addClass("past")
        } else if (timeHour == currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })

    var local9am = localStorage.getItem("9am");
    $("#9am .description").val(local9am);
    var local10am = localStorage.getItem("10am");
    $("#10am .description").val(local10am);
    var local11am = localStorage.getItem("11am");
    $("#11am .description").val(local11am);
    var local12am = localStorage.getItem("12pm");
    $("#12pm .description").val(local12am);
    var local1pm = localStorage.getItem("1pm");
    $("#1pm .description").val(local1pm);
    var local2pm = localStorage.getItem("2pm");
    $("#2pm .description").val(local2pm);
    var local3pm = localStorage.getItem("3pm");
    $("#3pm .description").val(local3pm);
    var local4pm = localStorage.getItem("4pm");
    $("#4pm .description").val(local4pm);
    var local5pm = localStorage.getItem("5pm");
    $("#5pm .description").val(local5pm);
})
