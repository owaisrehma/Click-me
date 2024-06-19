let index = 0;


function changeColor(){
let color = ["yellow", "blue", "black", "green", "pink"];

document.getElementsByTagName("body")[0]
.style.background = color [index++];

if (index > color.length - 1)
 index = 0;
}
