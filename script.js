
// js for home page
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// js for motivational page
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// for cart

 // Sample cart items
 let cart = [
    { id: 1, name: "Alone- A True Story", price: 10 },
    { id: 2, name: "THE BUDDHA IN THE ATTIC", price: 15 },
    { id: 3, name: "hide & seek", price: 12 }
];

function generateCartItems() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Clear cart items
    let totalPrice = 0;

    cart.forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(itemElement);
        totalPrice += item.price;
    });

    document.getElementById("totalPrice").innerText = `Total Price: $${totalPrice}`;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    generateCartItems(); // Refresh cart items
}

function checkout() {
    alert("Checkout - Total Price: $" + cart.reduce((acc, item) => acc + item.price, 0));
    // Here you can add more functionality for the checkout process
}

// Initial generation of cart items
generateCartItems();

// for contact

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// for login

function toggleForm() {
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');
    loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
    signupContainer.style.display = signupContainer.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement login logic here
    const email = document.querySelector('#loginForm input[type="email"]').value;
    const password = document.querySelector('#loginForm input[type="password"]').value;

    // Example login logic (to be replaced with actual server-side authentication)
    if(email === "user@example.com" && password === "password123") {
        alert('Login successful!');
        // Redirect to home page or user dashboard
        window.location.href = "index.html";
    } else {
        alert('Invalid email or password.');
    }
    alert('Login functionality not implemented.');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement signup logic here
    alert('Signup functionality not implemented.');
});
// for forget password

function forgotPassword() {
    // This is a simple placeholder for actual forgot password functionality
    // In a real application, this would likely involve redirecting the user to a dedicated password reset page,
    // or opening a modal allowing them to enter their email address to receive a password reset link.
    alert('Forgot password functionality not implemented.');
}




// for reset passoword

document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement reset password logic here
    // This could involve sending the email to the server to generate a reset link
    alert('Reset link sent to your email.');
});

function toggleForm() {
    // This function could toggle between the reset password form and the login form
    // For simplicity, it's just a placeholder here
    alert('Toggle form functionality not implemented.');
}

// for

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// for trending page

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});
