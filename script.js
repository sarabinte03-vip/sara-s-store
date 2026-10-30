// HOME PAGE BUTTON
function goToProducts() {
    window.location.href = "products.html";
}

// PRODUCT PAGE BUTTON
let cartCount = 0;

function addToCart(productName) {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(productName + " has been added to your cart!");
}

// CONTACT PAGE FORM
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.querySelector("form").reset();
}
