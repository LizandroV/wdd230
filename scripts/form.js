document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
  
    if (password !== confirmPassword) {
      document.getElementById('passwordError').textContent = "Passwords do not match.";
      document.getElementById('password').value = '';
      document.getElementById('confirmPassword').value = '';
      document.getElementById('password').focus();
      return;
    } else {
      document.getElementById('passwordError').textContent = '';
    }
  
    if (!email.endsWith('@byui.edu')) {
      document.getElementById('email').setCustomValidity('Please enter a valid byui.edu email address.');
      return;
    } else {
      document.getElementById('email').setCustomValidity('');
    }
  
    this.submit();
  });
  
  function showRating() {
    var rating = document.getElementById('pageRating').value;
    document.getElementById('ratingValue').textContent = rating;
  }