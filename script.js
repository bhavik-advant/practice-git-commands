// Get elements
const button = document.getElementById('myButton');
const output = document.getElementById('output');

// Event listener for button click
button.addEventListener('click', function() {
    const timestamp = new Date().toLocaleString();
    output.innerHTML += `<p>Button clicked at: ${timestamp}</p>`;
});

// Initialize message
document.addEventListener('DOMContentLoaded', function() {
    output.innerHTML = '<p>Ready to practice git commands!</p>';
});

function unusedFunction() {
    console.log("This function is not used anywhere for patch files.");
}
