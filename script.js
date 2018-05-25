$(document).ready(function(){
    $("img").fadeIn(4000);
    $("#credit").fadeIn(3000);
    $("#moreInfo").fadeIn(3000);
    $("#backgroundWriting1").fadeOut(10000);
    $("#backgroundWriting2").fadeOut(10000);


    $("img").on("click", function (){
        $(this).val();
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

var AnthonyGraves = new Person("Anthony Graves", 18, "convicted of murdering a family of six people");
var AnthonyHinton = new Person("Anthony Ray Hinton", 28,"wrongly convicted of the murders of two restaurant workers in Birmingham, Alabama in 1985" );
var CurtisMccarty = new Person("Curtis Edward McCarty", 21, "for a 1982 Oklahoma City murder he didn’t commit");
var DerralWayneHodgkins = Person("Derral Wayne Hodgkins", 9, "Murder of friend Teresa Lodge");
var DerrickJamison = Person("Derrick Jamison", 20, "falsely testified against that he had committed the murder");