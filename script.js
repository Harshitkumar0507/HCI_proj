function toggleControlPanel() {
    const controlPanel = document.getElementById('control-panel');
    if (controlPanel.style.display === 'none' || controlPanel.style.display === '') {
        controlPanel.style.display = 'block';
    } else {
        controlPanel.style.display = 'none';
    }
}

function toggleLogin() {
    alert('Login feature coming soon!'); // Placeholder function
}

function toggleSignup() {
    alert('Signup feature coming soon!'); // Placeholder function
}

function changeFontSize(size) {
    document.body.style.fontSize = size + 'px';
}

function changeFontColor(color) {
    document.body.style.color = color;
}

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

// Add form validation for the email input
document.querySelector('.btn-subscribe').addEventListener('click', function() {
    const emailInput = document.querySelector('.footer input[type="email"]');
    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(emailPattern)) {
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
        emailInput.focus();
    }
});
const text = "The adaptive learning platform for dyslexic students!";
const typingSpeed = 100; // Adjust the speed of typing here
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Restart the animation after a delay
        setTimeout(() => {
            index = 0; // Reset index to start from the beginning
            document.getElementById('typed-text').innerHTML = ""; // Clear the text
            typeText(); // Restart the typing animation
        }, 1000); // Adjust delay before restart
    }
}

typeText();

