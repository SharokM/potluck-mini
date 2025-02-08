// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign potluck dish button
const assignButton = document.querySelector(".assign");
// assigned items 
const assignedItems = document.querySelector(".assigned-items");


addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value; 
    // console.log(guest);
    if (guest !== "") {
        // let listItem = document.createElement("li");
        // listItem.innerText = guest;
        // guestList.append(listItem);
        addToList(guest);
        clearInput();
        updateGuestCount();
    }    
});

const clearInput = function () {
     guestInput.value = "";
};

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length >= 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potLuckItems = ["potato salad", "peanut and onion milkshake", "roast hamsandwich", "single grape", "mexican-bean stew", "honey-roasted parsnip pie", "lamb stew", "year supply of new york style cheesecake delivery & £10,000"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        let randomPotLuckIndex = Math.floor(Math.random() * potLuckItems.length);
        let randomPotLuckItem = potLuckItems[randomPotLuckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} will be awarded with a ${randomPotLuckItem} as a reward for their hard work!`;
        assignedItems.append(listItem);
        potLuckItems.splice(randomPotLuckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});