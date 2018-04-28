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
var characters = [{
    "name": "IG 88",
    "hp": 180,
    "attack": 10,
    "counter": 25,
    "image": "assets/images/ig_88.jpg",
    draw: function () {
        var charContainer = $("<div>");
        var textDiv = $("<div>");
        var hpDiv = $("<div>");
        var charImg = $("<img>");
        textDiv.text(this.name).attr("id", "namediv");

        hpDiv.text(this.hp).attr("id", "hpdiv");

        charImg.attr({ src: this.image, height: 100, width: 125, alt: "characterImage" });

        charContainer.append(textDiv, charImg, hpDiv);
        charContainer.attr("id", "character-container");
        charContainer.addClass("playableCharacter");
        charContainer.attr("data-charInfo", JSON.stringify(this));
        return charContainer;

    }
},
{
    "name": "K-2SO",
    "hp": 120,
    "attack": 8,
    "counter": 8,
    "image": "assets/images/k-2so.jpg",
    draw: function () {
        var charContainer = $("<div>");
        var textDiv = $("<div>");
        var hpDiv = $("<div>");
        var charImg = $("<img>");
        textDiv.text(this.name).attr("id", "namediv");
        hpDiv.text(this.hp).attr("id", "hpdiv");
        charImg.attr({ src: this.image, height: 100, width: 125, alt: "characterImage" });
        charContainer.append(textDiv, charImg, hpDiv);
        charContainer.attr("id", "character-container");
        charContainer.addClass("playableCharacter");
        charContainer.attr("data-charInfo", JSON.stringify(this));
        return charContainer;

    }
},
{
    "name": "EV-9D9",
    "hp": 150,
    "attack": 20,
    "counter": 20,
    "image": "assets/images/EV-9D9.jpg",
    draw: function () {
        var charContainer = $("<div>");
        var textDiv = $("<div>");
        var hpDiv = $("<div>");
        var charImg = $("<img>");
        textDiv.text(this.name).attr("id", "namediv");
        hpDiv.text(this.hp).attr("id", "hpdiv");
        charImg.attr({ src: this.image, height: 100, width: 125, alt: "characterImage" });
        charContainer.append(textDiv, charImg, hpDiv);
        charContainer.attr("id", "character-container");
        charContainer.addClass("playableCharacter");
        charContainer.attr("data-charInfo", JSON.stringify(this));
        return charContainer;

    }
},
{
    "name": "Battle Droid",
    "hp": 100,
    "attack": 5,
    "counter": 5,
    "image": "assets/images/Battle-Droid.jpg",
    draw: function () {
        var charContainer = $("<div>");
        var textDiv = $("<div>");
        var hpDiv = $("<div>");
        var charImg = $("<img>");
        textDiv.text(this.name).attr("id", "namediv");
        hpDiv.text(this.hp).attr("id", "hpdiv");
        charImg.attr({ src: this.image, height: 100, width: 125, alt: "characterImage" });
        charContainer.append(textDiv, charImg, hpDiv);
        charContainer.attr("id", "character-container");
        charContainer.addClass("playableCharacter");
        charContainer.attr("data-charInfo", JSON.stringify(this));
        return charContainer;

    }
}];
var gameIsOn = false;
var enemySelected = false;
var heroHP;
var villainHP;
var heroAtt;
var villainAtt;
var baseAtt;

// window.onload = function () {
    var heroes = $("#heroes");
    //    heroes.append(characters[0].draw())
    for (elements in characters) {
        heroes.append(characters[elements].draw());
        //     var charContainer = $("<div>");
        //     var textSpan = $("<div>");
        //     var hpSpan = $("<div>");
        //     textSpan.text(characters[elements].name).attr("id", "nameDiv");
        //     hpSpan.text(characters[elements].hp).attr("id", "hpDiv");
        //     var charImage = $("<img>");
        //     charImage.attr("src", characters[elements].image).attr("height", "100").attr("width", "125");
        //     charContainer.attr("id", "character-container");
        //     charContainer.addClass("playableCharacter")
        //     charContainer.append(textSpan);
        //     charContainer.append(charImage);
        //     charContainer.append(hpSpan);
        //     heroes.append(charContainer);

    }
    $(".playableCharacter").on("click", function () {
        console.log(this);
        console.log("clicked e: " + this);
        $(this).removeClass("playableCharacter");
        $(this).addClass("hero")
        var yourCharacter = JSON.parse($(this).attr("data-charInfo"));
        heroHP = yourCharacter.hp;
        heroAtt = yourCharacter.attack;
        baseAtt = yourCharacter.attack;
        console.log("You have HP of: " + heroHP + " and Attack is: " + heroAtt);
        $(this).clone().appendTo("#yourcharacter");
        $(this).remove();
        //var charInfo = $(this.get());
        //console.log("Char info: " + charInfo);
        heroes.children().removeClass("playableCharacter")
        heroes.children().addClass("enemies");
        heroes.children().clone().appendTo("#enemiesavailable");
        heroes.empty();
        //var enemies = $("#enemiesavailable.playableCharacter").children();
        //enemies.attr("class", "enemies");
        
        // console.log("character?: " + yourCharacter.hp);
    })
    
    $("#enemiesavailable").on("click", ".enemies", function () {
        //var defender = $("");
        if(!enemySelected){
        console.log("clicked on enemy: " + this);
        $(this).removeClass("enemies");
        $(this).addClass("villain");
        var yourVillain = JSON.parse($(this).attr("data-charInfo"));
        villainAtt = yourVillain.counter;
        villainHP = yourVillain.hp;
        $(this).clone().appendTo("#defender");
        $(this).remove();
        gameIsOn = true;
        enemySelected = true;
        }
    
    })
   $("#attack").on("click", function(){
    console.log("You attacked the villain for " + heroAtt + " damage");
    villainHP = villainHP-heroAtt; 
    console.log("His HP is now " + (villainHP));
    heroHP = heroHP - villainAtt;
    heroAtt = heroAtt + baseAtt;
    console.log("Your attack is now " + heroAtt);
    //jquery hero element to update THAT text for hp left
    //jquery villain element to update that text for hp left
    //printTo element to update game info.

   })

function printToElement(text, elementID){
    var buildEleStr= "#"+elementID
    var eleToPrintTo = $(buildEleStr).text(text);
}
// }
