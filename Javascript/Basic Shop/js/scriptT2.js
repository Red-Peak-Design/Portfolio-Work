var total = 0;
var tipammount = 0;
var firsttotal = 0;

var drinks = {
  "Water": 10,
  "Coffee": 20,
  "Beer": 30,
  "Brandy": 40
};

var foods = {
    "Breakfast": 30,
    "Burger": 100,
    "Pizza": 130,
    "Salad": 70,
};



function drink() {
    var drinkPrice = prompt("Which drink would you like?", JSON.stringify(drinks));
    total = total + drinks[drinkPrice];
    alert(total);
};

function food() {
    var foodPrice = prompt("Which Food item would you like?", JSON.stringify(foods));
    total = total + foods[foodPrice];
    alert(total);
};

function tipfun() {
    tipammount = Number(prompt("How much tip would you like to add?"));
    total = total + tipammount;
    firsttotal = total - tipammount;
    alert(tipammount);
    alert(total);

};

function totalreveal() {
    alert(total);
}

function ordermeal() {
    drink();
    food();
    tipfun();
    document.getElementById("ftotal").innerHTML = firsttotal;
    document.getElementById("tipdisplay").innerHTML = tipammount;
    document.getElementById("totaldisplay").innerHTML = total;
    
}

function update() {
    document.getElementById("tipdisplay").innerHTML = tipammount;
    document.getElementById("totaldisplay").innerHTML = total;
}


