let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  resetCounter();
}

function resetCounter() {
  countEl.textContent = 0;
  count = 0;
}

function addListItem() {
  let listItem = document.getElementById("list-item");
  let userInput = document.getElementById("user-input").value;

  if (userInput.trim() !== "") { // Check if user input is not empty or just whitespace
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "text-data";

    let label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(userInput));

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    listItem.appendChild(document.createElement('br'));

    document.getElementById("user-input").value = ""; // Clear input field after adding item
  }
}
