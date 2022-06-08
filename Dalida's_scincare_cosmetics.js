// let, const, string, number, boolean, null, undefined
const SHOP_NAME = "Dalida's scincare cosmetic shop";
const SELLER = "Dalida";

let numberOfEmployees = 3;
let inStock = true;
let customer;
let basket = null;

//object
let product = {
    name: "Medi-peel: red lacto collagen ampaule",
    price: 9000,
    volume: "70 ml",
    "suitable for": "problematic skin with enlarged pores",
};

// Adding, deleting, adding function in object
product.rating = 4,4;

delete product.label;

let key = "rating";
product[key] = 4,4;

product.print = function () {
  console.log(this.name + this.price);
};
product.print();

// Arrays, map, filter, rest and spread operations. Slice 
let forFace = ["Blithe pressed serum gold apricot", "Clean up hydro foam cleaner", "Special care pore9 tightening serum medi-peel"];
let forHair = ["Estethic house cp-1 bright complex intense nourishing conditioner", "Dr.Forhair folligen silk balsam", "Lador Triplex natural shampoo"];

forFace.push("Cosrx real fit retinol serum");
forFace.pop();

forFace.unshift("Super matcha pore care");
forFace.shift();

let cosmetics = forFace.concat(forHair);

const amountOfCosmeticcs = [30, 15, 20, 10, 5, 17];
const afterEntrance = amountOfCosmeticcs.map((num) => num * 2);

let mustBuy = amountOfCosmeticcs.filter((num) => num >= 15);

function buy(customerName, totalPrice, ...products) {
    return `${customerName} buys ${products} for ${totalPrice}`;
  }

buy("Madina", 30000, "Blithe pressed serum gold apricot", "Clean up hydro foam cleaner", "Special care pore9 tightening serum medi-peel");

function totalPrice(x, y, z) {
    return x + y + z;
}
  
let priceOfEachProduct = [15000, 20000, 35000];
  
console.log(sum(...priceOfEachProduct));

console.log(cosmetics.slice(2, 4));

// Compare, for, switch

for (let i = 0; i < cosmetics.length; i++) {
    if (i == "Blithe pressed serum gold apricot") {
        console.log("Yes, we have.");
    } else {
        console.log("No, we have not.");
    }
}
for (let i = 0; i < amountOfCosmeticcs.length; i++) {
    if (i === "5") {
        console.log("We have only 5");
    } else if (i >= 10) {
        console.log("We have enough.");
    } else {
        console.log("We have a lot.")
    }
}

let selectedProduct;
let finalProduct = selectedProduct ?? "Dr.Forhair folligen silk balsam";
console.log(finalFruit);

let selectedProductForHair = "Dr.Forhair folligen silk balsam";

if (selectedProductForHair) {
  console.log("Buy " + selectedProductForHair);
} else {
  console.log("Basket is empty");
}

for (let i = 0; i < amountOfCosmeticcs.length; i++) {
    switch(i) {
        case 5:
            console.log("Order 15");
            break;
        case 15:
            console.log("Order 5");
            break;
        case 10:
            console.log("Order 10");
            break;
        default:
            console.log("Do not need order");
            break;
    }
}

// Functions
function totalPriceBuy(p1, p2, p3) {
    return p1 + p2 + p3;
}
totalPriceBuy(10000, 20000, 15000);

let countOfProducts = function () {
    return cosmetics.length;
};

let countOfProducts2 = () => {
    return cosmetics.length;
};
// DESCTRUCTURING
// let product = {
//     name: "Medi-peel: red lacto collagen ampaule",
//     price: 9000,
//     volume: "70 ml",
//     "suitable for": "problematic skin with enlarged pores",
// };

function showPrice(product) {
  console.log(`${product.name} costs ${product.price} tg`);
}