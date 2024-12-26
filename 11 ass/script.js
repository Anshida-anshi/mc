 document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

  
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    successMessage.style.display = 'none';

    let isValid = true;

    
    if (!name) {
        nameError.style.display = 'inline';
        isValid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'inline';
        isValid = false;
    }

   
    if (isValid) {
        successMessage.style.display = 'inline';
      
        document.getElementById('feedbackForm').reset();
    }
});