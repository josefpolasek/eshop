document.getElementById("logo").onclick = () => window.location.href ="login.html";


$(document).ready(function(){

        $.getJSON("../items.json", function(data){
            console.log(data); // Prints: Harry
        }).fail(function(){
            console.log("An error has occurred.");
        });
});
