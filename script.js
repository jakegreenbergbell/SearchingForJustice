$(document).ready(function(){
    peopleArray = [];

    $.getJSON("people.json", function(data){
        for(var i = 0; i < data.length; i++){
            peopleArray.push(data[i]);

        }
        console.log(peopleArray)
    });
    $("img").fadeIn(4000);
    $("#credit").fadeIn(3000);
    $("#moreInfo").fadeIn(3000);
    $("#backgroundWriting1").fadeOut(10000);
    $("#backgroundWriting2").fadeOut(10000);


    $("img").on("click", function (){
        var parent = $(this).attr("tabindex");
        console.log($(this));
        console.log(parent);
        var person = peopleArray[parent];
        console.log(person.name);
        var nameNoSpace = person.name.split(' ').join('').toLowerCase();
        var imgString = "img/zoom/" + nameNoSpace + ".jpg";
        $("#name").text(person.name);
        $("#years").text(person.years);
        $("#bio").text(person.biography);
        $("#zoomIMG").attr("src", imgString);
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
