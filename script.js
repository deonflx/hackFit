document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
  
    // Print the entered values to the console
    console.log("Username: " + username);
    console.log("Password: " + password);
    console.log("Phone Number: " + phone);
  
    // Hardcoded username and password check
    
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('logout-container').style.display = 'block';
        document.getElementById('user-name').textContent = username;
     
   
  });
  
  document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('logout-container').style.display = 'none';
    document.getElementById('login-form').reset();
  });