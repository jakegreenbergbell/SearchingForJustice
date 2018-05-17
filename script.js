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

    $("img").on("mouseover", function(){
       //$(this).animate({"width": "226px", "height": "219px"}, 200);
        $(this).animate({"bottom": "15px"}, 400);

    });
    $("img").on("mouseleave", function() {
        //$(this).animate({"width": "206px", "height": "199px"}, 200);
        $(this).animate({"bottom": "0px"}, 300);

    });
});


function Person(name, years, crime){
    this.name = name;
    this.years = years;
    this.crime = crime;
}

var GussieEvans = new Person();