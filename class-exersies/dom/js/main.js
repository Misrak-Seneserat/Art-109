console.log("Helloo");


let pageTitle = document.querySelector("#page-title");
///JAVASCRIPT Timed color change
setTimeout(function(params) { pageTitle.style.color = "pink";
   //console.log("timeout worked");
}, 3000)

///Click event on header change background
document.querySelector("header").onclick = function(){
    //console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "yellow"
}




