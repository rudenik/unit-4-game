// var characters = [{"name":"4-LOM",
//                     "hp":0,
//                     "attack":0,
//                     "counter":0,
//                     "image":"assets/images/4-LOM.jpg"}, 
//                     {"name":"Bossk",
//                     "hp":0,
//                     "attack":0,
//                     "counter":0,
//                     "image":"assets/images/Bossk.jpg"}, 
//                     {"name":"Dengar",
//                     "hp":0,
//                     "attack":0,
//                     "counter":0,
//                     "image":"assets/images/Dengar.jpg"}, 
//                     {"name":"Zuckuss",
//                     "hp":0,
//                     "attack":0,
//                     "counter":0,
//                     "image":"assets/images/Zuckuss.jpg"}, 
var characters = [                  {"name":"IG 88",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/ig_88.jpg"}, 
                    {"name":"K-2SO",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/k-2so.jpg"}, 
                    {"name":"EV-9D9",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/EV-9D9.jpg"}, 
                    {"name":"Battle Droid",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/Battle-Droid.jpg"}];
var gameIsOn = false;
var enemySelected = false;

window.onload = function(){
   var heroes = $("#heroes");
    for(elements in characters){
        var charContainer = $("<div>");
        var textSpan = $("<div>");
        var hpSpan = $("<div>");
        textSpan.text(characters[elements].name).attr("id", "nameDiv");
        hpSpan.text(characters[elements].hp).attr("id", "hpDiv");
        var charImage = $("<img>");
        charImage.attr("src", characters[elements].image).attr("height", "100").attr("width", "125");
        charContainer.attr("id", "character-container");
        charContainer.addClass("playableCharacter")
        charContainer.append(textSpan);
        charContainer.append(charImage);
        charContainer.append(hpSpan);
        //charContainer.css('z-index',25);
        heroes.append(charContainer);
        //characters[elements].image;
        //charContainer.attr()
   }
   $(".playableCharacter").on("click", function (e){
        console.log("clicked e: " + e.target);
           $(e.target).clone().appendTo("#yourcharacter");
           $(e.target).remove();
        console.log(heroes);
        heroes.children().clone().appendTo("#enemiesavailable");
        heroes.empty();
        var enemies = $("#enemiesavailable").children();
        enemies.attr("class", "enemies")
        })
    $("#enemiesavailable").on("click", function(e){
        console.log("clicked on enemy: " + e.target);
        $(e.target).clone().appendTo("#defender");
        $(e.target).remove();
    })
}