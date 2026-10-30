// HOME PAGE BUTTON
function goToProducts() {
    window.location.href = "products.html";
}

// PRODUCT PAGE BUTTON
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// CONTACT PAGE FORM
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.querySelector("form").reset();
}
