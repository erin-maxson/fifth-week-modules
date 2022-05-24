var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var itemEl = $('#shopping-input');
var toDoList = [];

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();

    console.log('Shopping List Item:', itemEl);

    var listItem = itemEl.val();

    toDoList.push(listItem);
    display();
}

function display(){
    shoppingListEl.empty();
    for (let i = 0; i < toDoList.length; i++) {
        shoppingListEl.append("<li>" + toDoList[i] + "</li>");
    }
}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);
