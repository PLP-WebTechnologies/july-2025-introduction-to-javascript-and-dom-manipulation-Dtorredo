// Function 1: check age and return a message
function ageMessage(age) {
  if (age >= 18) {
    return "You are an adult.";
  } else if (age >= 13) {
    return "You are a teenager.";
  } else if (age >= 0) {
    return "You are a child.";
  } else {
    return "Please enter a valid age.";
  }
}

// Function 2: create a list item element for the shopping list
function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}


const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const list = document.getElementById("list");
const fillBtn = document.getElementById("fillBtn");

const countSpan = document.getElementById("count");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");


// 1) Read input and show result (age check)
checkAgeBtn.addEventListener("click", function () {
  const age = Number(ageInput.value);
  const msg = ageMessage(age);
  ageResult.textContent = msg;
});

// 2) Add single item to list (uses createListItem)
addItemBtn.addEventListener("click", function () {
  const text = itemInput.value.trim();
  if (text === "") return; 
  const li = createListItem(text);
  list.appendChild(li);
  itemInput.value = ""; 
});

// 3) Fill sample items using a loop 
fillBtn.addEventListener("click", function () {
  const samples = ["Milk", "Bread", "Eggs"];
  for (const s of samples) {
    const li = createListItem(s);
    list.appendChild(li);
  }

  let i = 1;
  while (i <= 3) {
    const li = createListItem("Extra " + i);
    list.appendChild(li);
    i++;
  }
});

let counter = 0;
incBtn.addEventListener("click", function () {
  counter += 1;
  countSpan.textContent = String(counter);
  // when counter gets high show an alert text (simple condition)
  if (counter === 10) {
    alert("Nice! You reached 10.");
  }
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  countSpan.textContent = String(counter);
});