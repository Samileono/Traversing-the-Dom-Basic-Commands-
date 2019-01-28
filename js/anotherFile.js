// var form = document.getElementById("addForm");
// var itemList = document.getElementById("items");
// var filter = document.getElementById("filter");

// filter.addEventListener("keyup", filterItems);


// form.addEventListener('submit', addItem);
// // Delete Event
// itemList.addEventListener("click", removeItem);

// function addItem(e) {

//     e.preventDefault();
//     var newItem = document.getElementById("item").value;

//     // create new element 
//     var li = document.createElement('li');
//     li.className = "list-group-item";
//     console.log(li);

//     // Add text node with input value
//     li.appendChild(document.createTextNode(newItem));
    

//     // create a delete button
//     var deleteButton = document.createElement('button');

//     // Add classes to the delete button
//     deleteButton.className = "btn btn-danger btn-sm float-right delete";
//     deleteButton.appendChild(document.createTextNode('X'));

    
//     li.appendChild(deleteButton);

//     itemList.appendChild(li);  
// }

// function removeItem(e) {
//     if(e.target.classList.contains('delete')) {
//         if(confirm('Are you sure?')) {
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }


// function filterItems(e) {
//     // converts everything to lowercase
//     var text = e.target.value.toLowerCase();
//     console.log(text);   
//     // Get list
//     var items = itemList.getElementsByTagName("li");

//     // Converts into an array
//     Array.from(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;
//         // console.log(itemName);

//     if(itemName.toLowerCase().indexOf(text)!= -1) {
//         item.style.display = "block";
//     } else {
//         item.style.display = "none";
//     }
//     });

// }


var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");

form.addEventListener("submit", addItem);
itemsList.addEventListener("click", removeItem);
// Adds an item

function addItem(e) {
    e.preventDefault();
    var item = document.getElementById("item").value;

    // creating a li element
    var li = document.createElement('li');
    // assiging that li a class
    li.className = "list-group-item";
    // Creating text node
    li.appendChild(document.createTextNode(item));
    itemsList.appendChild(li);

    var deleteBtn = document.createElement('Button');
    // deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    itemsList.appendChild(li);
}

// Remove the item
function removeItem(e){
    if(e.target.classList.contains('delete')) {
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}