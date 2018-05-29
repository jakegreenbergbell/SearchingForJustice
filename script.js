$(document).ready(function(){
    peopleArray = [];

    $.getJSON("people.json", function(data){
        for(var i = 0; i < data.length; i++){
            var newPerson = new PERSON(data[i]);
            peopleArray.push(newPerson);
        }
        console.log(peopleArray)
    });
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



function PERSON(data){
    this.name = data.name;
    this.years = data.years;
    this.biography = data.biography;
}
