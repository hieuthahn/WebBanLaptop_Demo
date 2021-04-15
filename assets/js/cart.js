// // var removeCartItemButtons = document.getElementsByClassName('btn-remove-js');
// // for (var i = 0; i < removeCartItemButtons.length; i++) {
// //     var button = removeCartItemButtons[i];
// //     button.addEventListener("click", function(event) {
// //         var buttonClicked = event.target;
// //         buttonClicked.parentElement.parentElement.remove();
// //         updateCartTotal();
// //     })
// // }

// // var quantityInputs = document.getElementsByClassName("product-count__fix-count-number");
// // for (var i = 0; i < quantityInputs.length; i++) {
// //     var input = quantityInputs[i];
// //     input.addEventListener("change", quantityChanged);
// // }

// // var addToCartButtons = document.getElementsByClassName("product-action__add-to-cart-btn");
// // for (var i = 0; i < addToCartButtons.length; i++) {
// //     var button = addToCartButtons[i];
// //     button.addEventListener("click", addToCartClicked)
// // }

// // function quantityChanged(event) {
// //     var input = event.target;
// //     if (isNaN(input.value) || input.value <=0) {
// //         input.value = 1;
// //     }
// //     updateCartTotal();
// // }


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove-js');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var removeImgCartItemButtons = document.getElementsByClassName('header__cart-item-remove');
    for (var i = 0; i < removeImgCartItemButtons.length; i++) {
        var button = removeImgCartItemButtons[i];
        button.addEventListener('click', removeImgCartItem);
    }

    var quantityInputs = document.getElementsByClassName('product-count__fix-count-number');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('btn-add-to-cart-js');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    var buyNowButtons = document.getElementsByClassName('product-action__add-to-cart-btn');
    for (var i = 0; i < buyNowButtons.length; i++) {
        var button = buyNowButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('cart__footer-btn-pay')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    alert('Cảm ơn bạn đã mua hàng tại Laptop-World');
    var cartItems = document.getElementsByClassName('cart__section')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal()
}

function removeImgCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
}

function returnStatusCart() {
    document.getElementById("no-cart-img").style.display = 'block';
    document.getElementById("no-cart-noti").style.display = 'block';
    document.getElementById("has-cart-noti").style.display = 'none';
    document.getElementById("has-cart-list").style.display = 'none';
    document.getElementById("has-cart-view").style.display = 'none';
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("product-detail__heading")[0].innerText;
    var price = shopItem.getElementsByClassName("product-detail__price-current")[0].innerText;
    var quantity = shopItem.getElementsByClassName('product-count__fix-count-number')[0].value;
    var imageSrc = document.getElementsByClassName("product-image__large")[0].src;
    addItemToCart(title, price, imageSrc, quantity);
    updateCartTotal();
}

function addStatusCart() {
    document.getElementById("no-cart-img").style.display = 'none';
    document.getElementById("no-cart-noti").style.display = 'none';
    document.getElementById("has-cart-noti").style.display = 'block';
    document.getElementById("has-cart-list").style.display = 'block';
    document.getElementById("has-cart-view").style.display = 'block';
    alert("Đã thêm vào giỏ hàng);
}

function addItemToCart(title, price, imageSrc, quantity) {
    var cartRow = document.createElement("li");
    cartRow.classList.add('header__cart-item');
    var cartRowBigCart = document.createElement("div");
    cartRowBigCart.classList.add("cart__section-items");
    var cartItems = document.getElementsByClassName("header__cart-list-item")[0];
    var cartItemNames = cartItems.getElementsByClassName("header__cart-item-name");

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("Sản phẩm này đã có trong giỏ hàng");
            return;
        }
    }
    var cartRowContents = `
        <img src="${imageSrc}" alt="" class="header__cart-img">
        <div class="header__cart-item-info">
            <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">${title}</h5>
                <div class="header__cart-item-price-wrap">
                    <span class="header__cart-item-price">${price}</span>
                    <span class="header__cart-item-multiply">x</span>
                    <span class="header__cart-item-qnt">${quantity}</span>
                </div>
            </div>
            <div class="header__cart-item-body">
                <span class="header__cart-item-describe">
                    Phân loại: Mới
                </span>
                <span class="header__cart-item-remove" onclick="returnStatusCart()">Xóa</span>
            </div>
        </div>`;
    var cartRowBigCartContents = `
        <div class="col l-5 m-5 cart-item__content-describe">
            <!-- <input type="checkbox" class="cart-item__content-checkbox"> -->
            <a href="" class="cart-item-picture-link"> 
                <img src="https://bit.ly/2ynZerk" alt="" class="cart-item-picture">
            </a>
            <h4 class="cart-item__content-name">
                <a href="" class="cart-item__content-name-link">Laptop Dell Inspiron N5584 CXGR01</a>
            </h4>
        </div>
        <div class="col l-7 m-7 cart-item__content-detail">
            <span class="cart-item__content-detail-price">15360000</span>
            <div class="product-count__fix">
            <button class="product-count__fix-btn">
                <i class="product-count__fix-icon fas fa-minus"></i>
            </button>
            <input type="number" class="product-count__fix-count-number" value="1"></input>
            <button class="product-count__fix-btn">
                <i class="product-count__fix-icon fas fa-plus"></i>
            </button>
            </div>
            <span class="cart-item__content-detail-total-price">15360000</span>
            <button class="cart-item__content-detail-actions btn-remove-js" onclick="returnStatusCart()">Xoá</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartRowBigCart.innerHTML = cartRowBigCartContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("header__cart-item-remove")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("header__cart-item-remove")[0].addEventListener("click", removeImgCartItem)
    cartRow.getElementsByClassName("product-count__fix-count-number")[0].addEventListener("change", quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart__section")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart__section-items");
    var total = 0;
    for (var i = 0; i< cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-item__content-detail-price")[0];
        var quantityElement = cartRow.getElementsByClassName("product-count__fix-count-number")[0];
        var price = parseFloat(priceElement.innerText);
        var quantity = parseFloat(quantityElement.value);
        total = total + (price * quantity);
    }
    // total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart__footer-total-price")[0].innerText ="Tổng tiền hàng: " + total;
}

// var cartCheck = document.getElementsByClassName('cart-item__content-checkbox');
// var removeCartItemButtons = document.getElementsByClassName('btn-remove-js');
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i];
//     button.addEventListener('click', function() {
//         var buttonClicked = event.target;
//         buttonClicked.parentElement.parentElement.remove();
//         updateCartTotal();
//     })
// }

// var priceTotalElementAuto = document.getElementsByClassName('product-count__fix-count-number');
// for (var i = 0; i < priceTotalElementAuto.length; i++) {
//     var priceTotal = priceTotalElementAuto[i];
//     priceTotal.addEventListener('change', function(event) {
//         updateCartTotal();
//     })
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart__section')[0];
//     var cartRows = cartItemContainer.getElementsByClassName('cart__section-items');
//     var total = 0;
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i];
//         var priceElement = cartRow.getElementsByClassName('cart-item__content-detail-price')[0];
//         // var priceTotalElement = cartRow.getElementsByClassName('cart-item__content-detail-total-price')[0];
//         var quantityElement = cartRow.getElementsByClassName('product-count__fix-count-number')[0];
//         var price = parseFloat(priceElement.innerText.replace('.', ''));
//         var quantity = quantityElement.value;
//         total = total + (price * quantity);
//     }
//     document.getElementsByClassName('cart-item__content-detail-total-price')[0].innerText = total;
//     // document.getElementsByClassName('cart__footer-total-price')[0].innerText ='Tổng tiền hàng: ' + total;
// }


