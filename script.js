function addItem(){
    var ul = document.getElementById("shopList");
    var newItem = document.getElementById("newItem").value;
    var li = document.createElement("div");
    li.innerHTML = "<input type = 'checkbox' onclick = 'deleteItem();' class = 'chk' name = '" 
        + newItem + "'>" + "<label for ='" + newItem + "' class='lbl'>&nbsp;&nbsp;" + newItem + "</label>";

    ul.appendChild(li);
}

function deleteItem(){
    var checkboxes = document.getElementsByClassName("chk");
    var labels = document.getElementsByClassName("lbl");
    for (var i = 0; i < checkboxes.length; i++) {
        box = checkboxes[i];
        label = labels[i];
        if(box.checked)
        {
            box.remove();
            label.remove();
        }
    }
}
const d = new Date();
console.log(d);