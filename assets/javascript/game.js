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
    "hp": 110,
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
    "attack": 12,
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
    "attack": 15,
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
    "attack": 7,
    "counter": 7,
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
var numEnemyDefeated = 0;
var gameInfoStr = "";
var audio;
var heroes = $("#heroes");
for (elements in characters) {
    heroes.append(characters[elements].draw());
  
}
$(".playableCharacter").on("click", function () {
    $(this).removeClass("playableCharacter");
    $(this).addClass("hero")
    var yourCharacter = JSON.parse($(this).attr("data-charInfo"));
    heroHP = yourCharacter.hp;
    heroAtt = yourCharacter.attack;
    baseAtt = yourCharacter.attack;
    audio = new Audio("assets/audio/opening.mp3");
    audio.play();
    $(this).clone().appendTo("#yourcharacter");
    $(this).remove();
    heroes.children().removeClass("playableCharacter")
    heroes.children().addClass("enemies");
    heroes.children().clone().appendTo("#enemiesavailable");
    heroes.empty();
    gameIsOn = true;

})

$("#enemiesavailable").on("click", ".enemies", function () {
    if (!enemySelected) {
        $(this).removeClass("enemies");
        $(this).addClass("villain");
        var yourVillain = JSON.parse($(this).attr("data-charInfo"));
        villainAtt = yourVillain.counter;
        villainHP = yourVillain.hp;
        $(this).clone().appendTo("#defender");
        $(this).remove();
        enemySelected = true;
    }

})
$("#attack").on("click", function () {
    if (gameIsOn) {
        villainHP = villainHP - heroAtt;
        if (villainHP <= 0) {
            $(".villain").children("#hpdiv").text("0");
            $("#gameinfo").text("You defeated " + $(".villain").children("#namediv").text() + ". Please select another enemy");
            $(".villain").clone().appendTo("#defeated");
            $("#defeated").children(".villain").addClass("dead");
            $("#defeated").children(".villain").removeClass("villain");
            $("#defender").empty()
            enemySelected = false;
            numEnemyDefeated++;
            audio = new Audio("assets/audio/blaster.mp3")
            audio.play()
            
            if (numEnemyDefeated >= 3) {
                $("#gameinfo").text("You win!");
                gameIsOn = false;
            }

        } else {
            heroHP = heroHP - villainAtt;
            if (heroHP <= 0) {
                $(".hero").children("#hpdiv").text("0");
                $("#gameinfo").text("You were defeated by " + $(".villain").children("#namediv").text() + ". Please restart the game");
                audio = new Audio("assets/audio/gameover.mp3");
                audio.play();
                gameIsOn = false;
            } else {
                audio = new Audio("assets/audio/blaster.mp3")
                audio.play()
                gameInfoStr = "You attacked " + $(".villain").children("#namediv").text() + " for " + heroAtt + " damage. ";
                gameInfoStr += "\n";
                gameInfoStr += $(".villain").children("#namediv").text() + " attacked you for " + villainAtt + " damage";
                $("#gameinfo").text(gameInfoStr);
                heroAtt = heroAtt + baseAtt;
                var heroHPDiv = $(".hero").children("#hpdiv");
                heroHPDiv.text(heroHP);
                $(".villain").children("#hpdiv").text(villainHP);

            }
        }
    }
})

