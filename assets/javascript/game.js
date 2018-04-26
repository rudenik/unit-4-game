var characters = [{"name":"4-LOM",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/4-LOM.jpg"}, 
                    {"name":"Bossk",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/Bossk.jpg"}, 
                    {"name":"Dengar",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/Dengar.jpg"}, 
                    {"name":"Zuckuss",
                    "hp":0,
                    "attack":0,
                    "counter":0,
                    "image":"assets/images/Zuckuss.jpg"}, 
                    {"name":"IG 88",
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
window.onload = function(){
   var heroes = $("#heroes");
    for(elements in characters){
        var charContainer = $("<div>");
        var charImage = $("<img>");
        charImage.attr("src", characters[elements].image).attr("height", "100").attr("width", "125");
        charContainer.append(charImage);
        heroes.append(charContainer);
        //characters[elements].image;
        //charContainer.attr()
   }
    //var $("")
}