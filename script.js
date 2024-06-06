// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var icon = document.createElement("i");
    icon.className = "bi bi-trash3-fill close";
    myNodelist[i].appendChild(icon);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("\nPlease enter something.");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var icon = document.createElement("i");
    icon.className = "bi bi-trash3-fill close";
    li.appendChild(icon);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
var inputEle = document.getElementById("myInput");
inputEle.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        // codigo da tecla enter
        newElement();
    }
});

var vids = $("myVideo");
$.each(vids, function () {
    this.controls = false;
});
