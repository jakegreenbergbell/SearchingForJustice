$(document).ready(function(){
    $("img").fadeIn(4000);
    $("#credit").fadeIn(3000);
    $("#moreInfo").fadeIn(3000);
    $("#backgroundWriting1").fadeOut(8000);
    $("#backgroundWriting2").fadeOut(10000);


    $("img").on("click", function (){
        $("#bioTable").show();
        $("#mask").show();
    });

    $("#mask").on("click", function(){
       $("#mask").hide();
       $("#bioTable").hide();

    });


});


function Person(name, years, crime){
    this.name = name;
    this.years = years;
    this.crime = crime;
}