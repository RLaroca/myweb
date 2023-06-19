var menu = {
    HOME: "home.html",
    CONTENT: "content.html",
    CONTACT: "contact.html"
}
var menuMobile = document.getElementById("menuMobile");
var menuDesk = document.getElementById("menuDesk");


//função para chamar os links do objeto nos menus
function links(dvc){
    for (var [key, value] of Object.entries(menu)){
        var link = value;
        var name = key;
        var a = document.createElement("a");
        a.setAttribute("href", value)
        a.textContent = key;
        dvc.append(a);
    }
}
links(menuDesk);
links(menuMobile)


function myFunction() {
var x = document.getElementById("menuMobile");
if (x.style.display === "block") {
  x.style.display = "none";
  
} else {
  x.style.display = "block";
  
}
var y = document.getElementById("burg");
if(x.style.display === "block"){
    y.innerHTML = "close";
} else{
    y.innerHTML = "menu";
}

}