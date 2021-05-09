/*Select all the elements*/ 

const list = document.getElementById("item-list");
const bottomDetails = document.getElementById("bottom-details-id");
const  input = document.getElementById("input-box");
const complete = document.getElementById("complete-task");
const incomplete = document.getElementById("incomplete-task");
const allTask = document.getElementById("all-task");

let LIST_ITEM = [];
let id = 0;
const CHECK = "tick";
const UNCHECK = "unTick";
const LINE_THROUGH = "lineThrough";
var num = 0;

document.addEventListener("keyup" ,function(event)
{
    if(event.keyCode == 13){
        const toDo = input.value;

    }
});