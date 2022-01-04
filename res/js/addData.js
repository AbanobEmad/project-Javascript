import { products } from "./data.js";
console.log(products)

var containerDeink = document.getElementById("conDrink")

function addData() {
    for (var i = 0; i < products.length; i++) {
        var divCon = document.createElement("div");
        divCon.className = "col-md-4 col-sx-9 d-flex justify-content-start align-items-center"
        divCon.style.padding="10px"
        var fav = document.createElement("img")
        fav.id=products[i].id
        if(localStorage.getItem(`${products[i].id}`)==="true")
        {
            fav.setAttribute("src","res/img/Filled_star.png")
        }
        else
        {
            fav.setAttribute("src","res/img/empty_star.png")
        }
        
        fav.onclick=addEventListener('click',favou.bind(fav),false)
        var img = document.createElement("img")
        img.setAttribute("src", products[i].src)
        img.className = "rounded-circle"
        img.style.width = "100px"
        img.style.height = "100px"
        var conPara = document.createElement("div")
        conPara.className = "d-flex align-items-center"
        conPara.style.padding = "10px"
        conPara.innerHTML = products[i].Name;
        containerDeink.appendChild(divCon)
        
        divCon.appendChild(img)
        divCon.appendChild(conPara)
        divCon.appendChild(fav)
        
    }

}
var favou=function addFav(param) {
     var img= param.target
   var src= img.getAttribute("src")
   if(src==="res/img/empty_star.png")
   {
    localStorage.setItem(`${img.id}`, "true");
       img.setAttribute("src","res/img/Filled_star.png")
   }
   else
   {
       localStorage.removeItem(`${img.id}`)
    img.setAttribute("src","res/img/empty_star.png")
   }
}
addData()