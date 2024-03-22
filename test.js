// test.js

// Display a prompt dialog asking for the user's name
let userName = prompt("Please enter your name", "Your Name");

// Check if the user provided input
if (userName) {
    alert("Welcome, " + userName + "!");
} else {
    alert("You didn't enter a name. Please try again.");
}
