var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebutton=document.getElementsByClassName("delete");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deletebutton.length; i++){
	deletebutton[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var bt= document.createElement("button");
	bt.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(`${input.value} `));
	li.appendChild(bt);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggling(){
	for (var i = 0; i < ul.children.length; i++) {
  ul.children[i].addEventListener("click", toggle);
}
function toggle() {
  this.classList.toggle("done");
}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
toggling();