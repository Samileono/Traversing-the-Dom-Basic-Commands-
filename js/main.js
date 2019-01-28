// TRAVERSING THE DOM
var itemList = document.querySelector("#items");

// //Selecting the parentNode of an item
// console.log(itemList.parentNode);

// // Changing parent Style
// itemList.parentNode.style.backgroundColor = "#f3f3f3";


// Parent Element
// var itemList = document.querySelector("#items");

//Selecting the parentNode of an item
// console.log(itemList.parentElement);

// Changing parent Style
// itemList.parentElement.style.backgroundColor = "#ccc";

/* Thing to remember  */

/*
    =============================================================================
    PARENTNODE AND PARENTELEMENT CAN MOST OF THE TIME BE USED INTERCHANGEABLY!!
    =============================================================================
*/


// Grabing the element children and console logging it

// console.log(itemList.childNodes);

/* Thing to remember  */

/*
    =============================================================================
                        Textnode represents the white Space
    =============================================================================
*/


//Using  Child Node to select the children of an Element
// itemList.childNodes[1].style.backgroundColor = "#333";
// itemList.childNodes[1].style.color = "#ccc";

// Selecting child element of an element using children
// console.log(itemList.children);
// itemList.children[0].style.backgroundColor = "yellow";

/* Thing to remember  */

/*
    =============================================================================
                      children property does not represents the white Space. it represents the whole element without any whitespaces, line breaks!
    =============================================================================
*/

//Grabbing the first child
// console.log(itemList.firstChild);

/* Thing to remember  */

/*
    =============================================================================
                      firstChild property does also represents the white Space or line break but the first one just!
    =============================================================================
*/

// Firstelementchild property 
// console.log(itemList.firstElementChild);

/* Thing to remember  */

/*
    =============================================================================
                      firstElementChild property does not represents the white Space or line break but the first one just!
    =============================================================================
*/

// We also have last child , lastElementChild which does the same thing 


// Selecting sibling
// console.log(itemList.nextSibling);

// Next sibling property represents the whitespace, line breaks if there are any!

// nextElementSibling
// console.log(itemList.nextElementSibling);


// previous sibling and previousElementSibling do select the element like nextSibling and nextElementSibling but the last onees!
