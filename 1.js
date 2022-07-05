let addbutton = document.querySelector("#addrem")
// let rembutton = document.querySelectorAll(".removebutton")
// rembutton.forEach(rut => rut.addEventListener("click", remitem))

addbutton.addEventListener("click", additem)
let i = 0
function additem(){
    var inputvalue = document.querySelector(".input").value
    let ol = document.querySelector(".lister")
    let lis = document.createElement("li")

    let but = document.createElement("Button")
    but.setAttribute("class","removebutton")
    but.innerHTML   = "DEL"
    // but.onclick = "remitem(parentNode.id)"

    // let str = "listitem"+i

    // lis.setAttribute("id","listitem")
    lis.id= `listitem${i}`
    
    // but.addEventListener("click",element.parentNode.removeChild(element.parentNode))

    but.setAttribute("onclick","remitem(parentNode.id)")


    lis.innerText = inputvalue

    lis.appendChild(but)
    ol.appendChild(lis)
    i++
}

function remitem(id){
    // removes item from list
    console.log("id is " , id)
    const element = document.getElementById(id)
    // console.log(element)
    element.remove()

}
