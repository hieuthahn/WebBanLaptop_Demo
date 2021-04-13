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

    var quantityInputs = document.getElementsByClassName('product-count__fix-count-number');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
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

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
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
