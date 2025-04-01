const STARTERS = ["Mojos 'n' Dip",
    "Basket of Mojos",
    "Mojos Supreme",
    "Mozzarella Cheese Sticks",
    "Garlic Bread",
    "Calamari Crrrunch",
    "Captain's Choice Platter",
    "Buffalo Wings",
    "Wings 'n' Rings"]; 
const SNP = ["Chicken 'n' Corn Soup",
    "Creamy Mushroom Soup",
    "American Salad",
    "Tuna Caesar Salad",
    "Caesar Salad"];
const PASTA = ["Carbonara Supreme Solo",
    "Carbonara Supreme Platter",
    "Skilletti Solo",
    "Skilletti Platter",
    "Prima Lasagna Solo",
    "Prima Lasagna Platter",
    "Seafood Marinara",
    "Shrimp Aglio Olio Solo",
    "Shrimp Aglio Olio Platter",
    "Bacon and Cheese Pasta Solo",
    "Bacon and Cheese Pasta Platter"];
const PIZZA = [ "Friday Special",
    "Angus Burger Pizza",
    "Angus Steakhouse Pizza",
    "Belly Buster",
    "Shakey's Special",
    "Manager's Choice",
    "Pizza Bianca",
    "Hi Protein Supreme",
    "Pepperoni Crrrunch",
    "Pepperoni",
    "Hawaiian Delight",
    "Garden Fresh",
    "Garlic n' Cheese",
    "Classic Cheese",
    "Pizza Americano",
    "Pizza Americano"];
const CNM = [ "Solo Pack",
    "Buddy Pack",
    "Family Pack",
    "Party Pack",
    "Blowout Pack"];
const DESSERTS = [ "Sundaes",
    "Banana Peach Surprise",
    "Banana Split"];
const BEVERAGES = [    "Rootbeer Float",
    "House Blend Iced Tea",
    "Mango Juice",
    "Pineapple Juice",
    "Orange Juice",
    "Lipton Tea",
    "Brewed Coffee",
    "Super Shake Strawberry",
    "Super Shake Vanilla",
    "Super Shake Chocolate"
    ];
const MENU  = [STARTERS, SNP, PASTA, PIZZA, CNM, BEVERAGES,     DESSERTS];


function HtOrThin(){
    let guest_choice = Math.floor(Math.random() * 10);
    if(guest_choice > 7){
        return "ht";
    }
    else{
        return "thin";
    } 
}

function RegLarPar(){
    let guest_choice = Math.floor(Math.random() * 10);
    if(guest_choice > 3){
        return "large";
    }
    else if(guest_choice < 7 || guest_choice > 3){
        return "party";
    }
    else{
        return "regular";
    }
}

function generateORDER(number_of_orders, MENU){
    let guest_choice = 0;
    let order = [];
    for(let i = 0; i <= number_of_orders; i++){
        guest_choice = Math.floor(Math.random() * 8);
        order.push(MENU[guest_choice]);
    }
    return order;
}   

function processORDER(order){
    let guest_choice = 0;
    let p_order = [];
    for(let i = 0; i < order.length; i++){
        let menu_length = order[i].length;
        let guest_choice = Math.floor(Math.random()* menu_length);
        p_order.push(order[i][guest_choice]);
    }
    return p_order;
}

function takeORDER(MENU){
    let p_order = processORDER(generateORDER(10, MENU));
    const ouput = document.getElementById("output");
    output.innerHTML = "";
    for(let i = 0; i < p_order.length; i++){
        let paragraph = document.createElement('p');
        paragraph.innerHTML = p_order[i];
        output.appendChild(paragraph);
    }

}


