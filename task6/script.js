
document.getElementById("shopBtn").onclick = () => {
    window.location.href = "#products";
};


document.querySelectorAll(".buyBtn").forEach(btn => {
    btn.onclick = () => {
        alert("Product added to cart!");
    };
});


document.getElementById("subscribeBtn").onclick = () => {
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (email === "" || !email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Thank you for subscribing!";
    document.getElementById("email").value = "";
};
