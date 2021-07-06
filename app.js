var food = [];
var completeList = null;
const addList = document.getElementById("add-list")

function add_element() {
    food.push(document.getElementById('food-item').value);
    document.getElementById('food-item').value = '';
    screen.innerHTML = food.value;
    disp();
}


function disp() {
    if (food.length === 0) {
        var completeList = "There is nothing in the cart yet..."
    } else {
        completeList = 'Total number of items in shopping list: ' + food.length + "<br>";
        for (i = 0; i < food.length; i++) {
            completeList += i + ':' + food[i] + "<br>";
            document.getElementById('display').innerHTML = completeList;
        }
    }
}

