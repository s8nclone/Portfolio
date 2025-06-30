// emailjs.init('81LDfZBOKpsUfkY1Y');
// // emailjs.sendForm('contact_me', 'contact_form', this);

window.onload = function() {
    AOS.init();

    // document.getElementById('contact-form').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     // generate a five digit number for the contact_number variable
    //     this.contact_number.value = Math.random() * 100000 | 0;
    //     // these IDs from the previous steps
    //     emailjs.sendForm('contact_me', 'contact_form', this)
    //         .then(function() {
    //             console.log('SUCCESS!');
    //             // clear input fields
    //             document.getElementById('contact-form').reset();
    //         }, function(error) {
    //             console.log('FAILED...', error);
    //         });
        
    // });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// JavaScript code to toggle dark mode
const body = document.querySelector('body');
const toggleButton = document.getElementById('dark-toggle');
const darkModeEnabled = localStorage.getItem('darkModeEnabled');

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', true);
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkModeEnabled', false);
}

// Check if dark mode is enabled on page load
if (darkModeEnabled === 'true') {
  enableDarkMode();
}

// Toggle dark mode when the button is clicked
toggleButton.addEventListener('click', function(e) {
  if (e.target.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Define an array of strings
const nameArray = ["'Muiz!", "Dayo!"];

// Get the element with the class name "typing_span"
const span = document.querySelector('.typing_span');

let currentIndex = 0;

//Set the text content of the span element to each string in the array, one after the other
setInterval(() => {
  span.textContent = nameArray[currentIndex % nameArray.length];
  currentIndex++;
}, 4000);

// Get current year
const newYear = new Date().getFullYear();

const yearText = document.getElementById("currentYear");
yearText.textContent = newYear;


// toggleButton.addEventListener('click', function() {
//   body.classList.toggle('dark-mode');
// });
