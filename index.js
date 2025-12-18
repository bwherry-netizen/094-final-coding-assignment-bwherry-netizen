const translations = {
    en: {
        nightmode: "Night-Mode",
        amount: "amount",
        random: "Random Websites",
        chair: "Chair",
        table: "Table",
        desk: "Desk",
        couch: "Couch",
        add: "Add",
        cart: "Shopping Cart",
        total: "Total cost"
    },
    es: {
        nightmode: "Modo-Nocturno",
        amount: "cantidad",
        random: "Sitios web aleatorios",
        chair: "Silla",
        table: "Mesa",
        desk: "Escritorio",
        couch: "Sofá",
        add: "Añadir",
        cart: "Carrito de compras",
        total: "Costo total"
    },
    ja: {
        nightmode: "ナイトモード",
        amount: "数量",
        random: "ランダムなウェブサイト",
        chair: "椅子",
        table: "テーブル",
        desk: "机",
        couch: "ソファ",
        add: "追加",
        cart: "ショッピングカート",
        total: "合計金額"
    }
};

const langs = ["en", "es", "ja"];
let langIndex = 0;

function changeLanguage() {
    langIndex = (langIndex + 1) % langs.length;
    const lang = langs[langIndex];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        // Special handling for total cost line
        if (key === "total") {
            el.textContent = `${translations[lang][key]}: $${total}`;
        } else {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    updateCartText();
}


let total = 0;


// Select all "Add" buttons
const buttons = document.querySelectorAll(".add-button");


// Item names + prices
const items = [
   { name: "Chair", price: 15 },
   { name: "Table", price: 30 },
   { name: "Desk",  price: 20 },
   { name: "Couch", price: 50 }
];


// Track quantity of each item
const quantities = [0, 0, 0, 0];


// Store li elements for each item (so we can update them)
const cartList = document.querySelector("#big-item ul");
const cartLines = [null, null, null, null];


buttons.forEach((button, index) => {
   button.addEventListener("click", () => {


       // Increase quantity
       quantities[index]++;


       // Update total cost
       total += items[index].price;
       document.getElementById("total-cost").textContent =
           `${translations[langs[langIndex]].total}: $${total}`;


       // If first time adding this item, create a new <li>
       if (!cartLines[index]) {
           const li = document.createElement("li");
           cartLines[index] = li;
           cartList.appendChild(li);
       }


       // Update the line's text to show quantity
       cartLines[index].textContent =
           `${translations[langs[langIndex]][items[index].name.toLowerCase()]} - $${items[index].price} - ${translations[langs[langIndex]].amount}: ${quantities[index]}`;
   });
});

function updateCartText() {
    cartLines.forEach((li, index) => {
        if (!li) return;

        li.textContent =
            `${translations[langs[langIndex]][items[index].name.toLowerCase()]} - $${items[index].price} - ${translations[langs[langIndex]].amount}: ${quantities[index]}`;
    });
}




// Changes the color of the background

  const mode = document.getElementById("nightMode")
  let isGray = false;


   mode.addEventListener("click", function() {


       if (isGray) {
           document.body.style.backgroundColor = `rgb(210, 180, 140)`;
       } else {
           document.body.style.backgroundColor = `rgb(85, 85, 85)`;
       }
       isGray = !isGray;
   });




   