let addToDoButton=document.getElementById("addToDo");
let inputField=document.getElementById("inputField");
let toDoContainer=document.getElementById("toDoContainer");
addToDoButton.addEventListener("click",function(){
    var paragraph=document.createElement("p");
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener("click",function(){
        toDoContainer.removeChild(paragraph);
    })
})