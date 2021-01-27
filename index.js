// $("h1").addClass("big-Note margin-30");

// $("button").html("<em><Strong>don't click me</strong></em>");

// $("img").attr("src", "images/sss.jpeg");

// $("a").attr("href", "https://www.yahoo.com");


// for(var i =0; i< 7; i++){

//     document.querySelectorAll("button")[i].addEventListener("click",function(){

// document.querySelector("h1").style.color = "red";


//     });
// }



// $("button").click(function(){
//     $("h1").css("color","purple");
// });


$("input").keypress(function(event){
//console.log(event.key);
$("h1").text(event.key);


})
$(document).keypress(function (event) {
    //console.log(event.key);
    $("h1").text(event.key);


});



$("h1").on("mouseover",function(){

    $("h1").css("color", "purple");


});

// $("h1").before("<button>Hei</>");


// $("h1").after("<button>Hei</>");

// $("h1").append("<button>Hei</>");

// $("h1").prepend("<button>Hei</>");


//$("button").remove();


// $("button").click(function () {
//     $("h1").hide();
// });

$("button").click(function () {
    $("h1").slideUp().slideDown().animate({marginTop: "20%"});
});
