var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var lista = document.getElementById('lista');

					function inputLength() {
	return input.value.length;
}


// add item on list
					function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.classList.add("btn", "btn-danger", "removeBtn"); //agregamos la clase al boton
	li.classList.add("list" , "list-group-item");
	btn.appendChild(document.createTextNode(" X ")); //agregamos la x al boton
	li.appendChild(btn); 
	li.appendChild(document.createTextNode(input.value));
	lista.appendChild(li);
	input.value = "";
	li.addEventListener("click", checkItem);
	btn.addEventListener("click", remove);
	}	

	item = document.getElementsByClassName("list");
for (var i = 0; i < item.length; i++) {
    checkItem(i, item);
    remove(i, item);
   }
//Check item
				function checkItem() {
	this.classList.toggle("done");    
}
//remove item
				function remove() {
item[i].parentNode.removeChild(item[i]);
}

// add item with click
				function addListAfterClick(e) {
	if (inputLength() > 0) {
		createListElement();
	}
}
// add item with enter
				function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


