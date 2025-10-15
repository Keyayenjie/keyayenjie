document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Simple validation
  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Example credentials (for demo only)
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";
    setTimeout(() => {
      alert("Redirecting...");
      // You can redirect to another page here:
      // window.location.href = "dashboard.html";
    }, 1000);
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
