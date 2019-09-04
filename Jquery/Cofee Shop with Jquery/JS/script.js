$(document).ready(function () {



    $(".Header h2").delay(100).fadeOut("slow"),
        $(".Header h2").slideDown("slow"),
        $(".Header h2").fadeIn("slow");
    $("#button").delay(800).fadeOut("slow"), $("#button").fadeIn("slow");

    $(".centered h1").slideUp("fast").delay(1200).fadeOut('slow'),
        $(".centered h1").slideDown("slow").fadeIn('slow');


    $('.quote').hover(
        function () {
            $(this)
                .animate({
                    marginTop: '100px'
                }),
                $(this)
                .animate({
                    marginBottom: '100px'
                });
        },
        function () {
            $(this)
                .animate({
                    marginTop: '20px'
                }),
                $(this)
                .animate({
                    marginBottom: '20px'
                });
        }
    );

    $(".thumbnail").mouseenter(
        function () {
            $(this).css("background-color", "green");
        });
    $(".thumbnail").mouseleave(function () {
        $(this).css("background-color", "hsla(120, 100%, 100%, 0)");
    });
    $(".thumbnail img").mouseenter(function () {
        $(this).css("width", "100%");
        $(this).css("height", "350px");
        $(this).css("border-radius", "45px");
    });
    $(".thumbnail img").mouseleave(function () {
        $(this).css("width", "300px");
        $(this).css("height", "200px");
        $(this).css("border-radius", "0px");
    });
    $(".na1").mouseenter(function () {
        $(this)
            .css("background-color", "red")
            .css("width", "50%")
            .css("height", "150px");
    });
    $(".na1").mouseleave(function () {
        $(this)
            .css("background-color", "hsla(120, 100%, 100%, 0)")
            .css("width", "300px")
            .css("height", "200px");
    });
    $(".na2").mouseenter(function () {
        $(this).css("background-color", "blue");
    });
    $(".na2").mouseleave(function () {
        $(this).css("background-color", "hsla(120, 100%, 100%, 0)");
    });
    $(".na2 img").mouseenter(function () {
        $(this).css("transform", "rotate(90deg)");
    });
    $(".na2 img").mouseleave(function () {
        $(this).css("transform", "rotate(360deg)")

    });


    $(".hoverli").hover(
        function () {
            $('ul.file_menu').slideDown('medium');
        },
        function () {
            $("ul.file_menu").slideUp("slow");
        }
    );
    $(".file_menu li").hover(
        function () {
            $(this).children("ul").slideDown('medium');
        },
        function () {
            $(this).children("ul").slideUp('slow');
        }
    );

    $("#HideCalc").click(function () {
            
                $(".calculator").slideUp('slow').fadeOut('slow').hide('slow');
    });
      $("#ShowCalc").click(function () {
              
                  $(".calculator").slideDown('slow').fadeIn('slow').show();
      });

});



var cart = [];

function saveCart() {
    localStorage.setItem("shoppingCartinfo", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCartinfo"));
}
var vat = 0;

var check = ["A", "B", "C"];

var Item = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count

}



loadCart()

function addItemToCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();


}


function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();

}

function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();

}

function clearCart() {
    updateeverything();
    cart = [];

    saveCart();
}

function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}



function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price * cart[i].count;

    }

    return totalCost;
}



function listCart() {
    loadCart();
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];

        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}
var discountammount = 0;



/*
function grossCart() {
    var grossCost = 0;
    grossCost = totalCart() + checkDelivery() + vatCart();
    grossCost = grossCost.toFixed(2);
    return grossCost;
}*/


/*
document.getElementById('EUToCart').onclick = function () {
    addItemToCart("Europe Box", 130, 1);
    saveCart();
}

document.getElementById('SAToCart').onclick = function () {
    addItemToCart("South American Coffee Box", 140, 1);
    saveCart();
}

document.getElementById('AsiaToCart').onclick = function () {
    addItemToCart("Asian Box", 130, 1);
    saveCart();
}

document.getElementById('NAToCart').onclick = function () {
    addItemToCart("North American Box", 130, 1);
    saveCart();
}

document.getElementById('Mixed1ToCart').onclick = function () {
    addItemToCart("Mixed Box One", 130, 1);
    saveCart();
}

document.getElementById('Mixed2ToCart').onclick = function () {
    addItemToCart("Mixed Box Two", 130, 1);
    saveCart();
}

document.getElementById('Mixed3ToCart').onclick = function () {
    addItemToCart("Mixed Box Three", 130, 1);
    saveCart();
}

document.getElementById('Mixed4ToCart').onclick = function () {
    addItemToCart("Mixed Box Four", 130, 1);
    saveCart();
}

document.getElementById('Mixed5ToCart').onclick = function () {
    addItemToCart("Mixed Box Five", 130, 1);
    saveCart();
}



for (var key in cart) {
    console.log(key + " " + cart[key]);
}

for (var key in check) {
    console.log(key + " " + check[key]);
}
*/



function checkDelivery() {
    var deliveryOption = 0;
    if (document.getElementById('r1').checked) {
        deliveryOption = 0;
    } else if (document.getElementById('r2').checked) {
        deliveryOption = 150;
    } else if (document.getElementById('r3').checked) {
        deliveryOption = 180;
    } else {
        return;
    }

    return deliveryOption;
}


function vatCart() {
    var vatCostPlace = 0;
    var vatCostPlace1 = 0;
    var vatCostPlace2 = 0;
    vatCostPlace1 = totalCart() + checkDelivery();
    vatCostPlace2 = vatCostPlace1 * 1.14 - vatCostPlace1;
    vatCostPlace = Math.round(vatCostPlace2 * 100) / 100;
    return vatCostPlace;
}

function grosscheck() {
    var grossgross = 0;
    grossgross = totalCart() + checkDelivery() + vatCart() - discountammount;
    grossgross = Math.round(grossgross * 100) / 100;
    return grossgross;
}
console.log(grosscheck());


function grossTotalcount() {
    var GrossTotal = 0;
    GrossTotal = totalCart()
    return GrossTotal;
}
console.log(grossTotalcount());



function validate(coupon) {
    var myCoupon = "LUCKY100";
    var coupon = myCoupon.trim();


    var input = document.getElementById("inCoupon").value;
    if (input.toUpperCase() == coupon.toUpperCase()) {
        document.getElementById('message').innerHTML = "Coupon applied!";
        document.getElementById('err').innerHTML = "";
        discountammount = 100;
        document.getElementById("TotalCartid").innerHTML = "R" + grosscheck();


        return true;
    } else {
        document.getElementById('err').innerHTML = "Invalid coupon";
        document.getElementById('message').innerHTML = "";
        return false;
    }
}

function updateList() {
    var checkpage = document.body.id;
    var onlypage = "body_cart";
    if (onlypage === checkpage) {
        var divElement = document.getElementById('CartItems');

        var html = "";
        for (var i = 0; i < cart.length; i = i + 1) {
            var pricecheck = JSON.stringify(cart[i].price);
            var amountcheck = JSON.stringify(cart[i].count);
            var itemtotal = pricecheck * amountcheck;
            console.log(itemtotal);
            var oneLine = "<p>" + "Item: " + JSON.stringify(cart[i].name) + " <span>" + "<h2><b>" + "Price: " + "R" + itemtotal + "</b></h2>" + "  " + "Amount Items: " + JSON.stringify(cart[i].count) + "</span></p>"; // line 6
            html = html + oneLine;

        }
        divElement.innerHTML = html;
    }
}

function UpdateTotal() {
    var checkpage = document.body.id;
    var onlypage = "body_cart";
    if (onlypage === checkpage) {
        document.getElementById('DeliveryChoice').innerHTML = "R" + checkDelivery();
        document.getElementById('vatCartid').innerHTML = "R" + vatCart();
        document.getElementById('TotalCartid').innerHTML = "R" + grosscheck();

    } else {

    }
}


/* function UpdateTotal() {
        if (document.getElementById('body_shop') = "body_shop") {
        document.getElementById('DeliveryChoice').innerHTML = "R" + checkDelivery();
        document.getElementById('vatCartid').innerHTML = "R" + vatCart();
        document.getElementById('TotalCartid').innerHTML = "R" + grosscheck();
    }
    else{
        return;
    }
};*/

function updateeverything() {
    loadCart();
    totalCart();
    checkDelivery();
    vatCart();
    UpdateTotal();
    grosscheck();
    updateList();
    grossTotalcount();


}

onload = updateeverything();

function Order1() {
    var CartPage = window.open("Cart.html");
    CartPage;
    CartPage.opener.alert("Item Added to Cart");

}

console.log(localStorage.getItem("shoppingCartinfo"));
console.log("hallo old world")




document.getElementById("clearButton").onclick = function () {

    clearCart();
    saveCart();
    updateeverything();
    loadCart();

}

function randomnumber() {

    var randomNumberBetween0and199 = Math.floor(Math.random() * 200);
    localStorage.setItem("randomnumberstring", randomNumberBetween0and199);
    return randomNumberBetween0and199;

}

function randomWholeNum() {

    // Only change code below this line.

    return Math.random();
}

if (document.getElementById("checkoutButton", ) != null) {

    document.getElementById("checkoutButton").onclick = function () {
        updateeverything();
        alert("Purchase of R" + grosscheck() + " was succesfull.");
        alert("This is you reference number = " + "REF" + randomnumber());
    };

    /*
    addItemToCart("Pear", 2.55, 5);
    addItemToCart("test", 44, 6);
    addItemToCart("Deluxe", 75, 1);
    addItemToCart("Africa Coffee Box", 120, 1);
    addItemToCart("Apples", 120, 4);
    */
    /*
    console.log(cart);
    console.log(cart[0]);
    console.log(cart[0].name);
    console.log(totalCart());
    console.log(checkDelivery());
    console.log(vatCart());
    */


    document.getElementById("AfricaToCart").onclick = function () {

        addItemToCart("African Coffee Box", 120, 1);
        saveCart();
        countCart();
        alert(grossTotalcount());
        loadCart();
        window.open("cart.html") + (loadCart());
        updateeverything();


    };

    document.getElementById("SAToCart").onclick = function () {
        addItemToCart("South American Coffee Box", 150, 1);
        saveCart();
        countCart();
        updateeverything();
        alert(grossTotalcount());
        loadCart();
        window.open("cart.html") + loadCart();
        updateeverything();
    };

    document.getElementById("EUToCart").onclick = function () {
        addItemToCart("Europe Coffee Box", 180, 1);
        saveCart();
        countCart();
        alert(grossTotalcount());
        loadCart();
        window.open("cart.html") + loadCart();
        updateeverything();
    };

    document.getElementById("AsiaToCart").onclick = function () {
        addItemToCart("Asian Coffee Box", 110, 1);
        saveCart();
        countCart();
        alert(grossTotalcount());
        loadCart();
        window.open("cart.html") + loadCart();
        updateeverything();
    };

    document.getElementById("NAToCart").onclick = function () {
        addItemToCart("North American Coffee Box", 170, 1);
        saveCart();
        countCart();
        alert(grossTotalcount());
        loadCart();
        window.open("cart.html") + loadCart();
        updateeverything();
    };


};
/*
document.getElementById("HideCalc").onclick = function () {
    document.getElementsByClassName("calculator")[0].style.display = "none";
}
document.getElementById("ShowCalc").onclick = function () {
    document.getElementsByClassName("calculator")[0].style.display = "inline-block";
}
*/
