

//Task 1

let signed_in = "logged in";
if (signed_in === "logged in") {
    console.log("You are logged in") 
} else if (signed_in === "logged_out") {
            console.log("You need to log in first")
}


//Task 2


let products = {"apple": 1.05, "bananas": 1.25, "oranges": 1.10, "chips": 2.25, "cookies": 2.5, "strawberries":3.05, "bread": 2.99}
let cart = [];

for (const item in products) {
    console.log(`Products: ${item}`);
}


let stillShopping = true;
do {
    let addToCart = prompt("Enter a product to add to cart. Type 'done' when finished.");
    if (addToCart === "done") {
        stillShopping = false; 
    }
} while (stillShopping)


while (true) {
    let addToCart = prompt("Enter a product to add to cart. Type 'done' when finished.");
    if (addToCart === "done") {
        break;
    }
}

function addProduct() {
    

    cart.push(addToCart);
    console.log(`Cart: ${cart}`);
}

console.log(addProduct())





arr = [10, 3, 5, 7, 9];
function sumAll() {
    arr.reduce((a,b)=>{a+b})
}



function totalCost() {
    bill = cart.reduce((a,b)=>{a+b});
    console.log(`Total: $${bill}`)
}




let totalBalance = 500;

function deposit() {
    let newDeposit = prompt("Enter amount to deposit");
    totalBalance += newDeposit

}

function withdrawal() {
    const toWithdraw = prompt("How much would you like to withdraw?");
    if (toWithdraw <= totalBalance) {
        totalBalance = totalBalance - toWithdraw;

    }
}

function balance() {
    console.log(`Balance: $${totalBalance}`);
}