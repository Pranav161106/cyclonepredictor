document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (username === "admin" && password === "space123") {
    alert("Welcome, Explorer!");
    // You could redirect to another page:
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid login credentials. Please try again.");
  }
});
