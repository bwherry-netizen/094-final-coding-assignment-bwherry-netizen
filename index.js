let total = 0;

// Select all "Add" buttons
const buttons = document.querySelectorAll(".add-button");

// Item names + prices
const items = [
    { name: "Chair", price: 15 },
    { name: "Table", price: 30 },
    { name: "Desk",  price: 20 }
];

// Track quantity of each item
const quantities = [0, 0, 0];

// Store li elements for each item (so we can update them)
const cartList = document.querySelector("#big-item ul");
const cartLines = [null, null, null];

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        // Increase quantity
        quantities[index]++;

        // Update total cost
        total += items[index].price;
        document.getElementById("total-cost").textContent =
            `Total cost: $${total}`;

        // If first time adding this item, create a new <li>
        if (!cartLines[index]) {
            const li = document.createElement("li");
            cartLines[index] = li;
            cartList.appendChild(li);
        }

        // Update the line's text to show quantity
        cartLines[index].textContent =
            `${items[index].name} - $${items[index].price} - amount: ${quantities[index]}`;
    });
});