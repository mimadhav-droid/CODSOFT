// Show project details in an alert (you can expand this to show more dynamic content)
function showDetails() {
    alert("Here are more details about the project.");
  }
  
  // Form submit event
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Here, you could add code to actually send the message
    } else {
      alert("Please fill in all fields.");
    }
  });
  