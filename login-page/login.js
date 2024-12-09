let pswrd = document.getElementById('pswrd')
let toggleBtn = document.getElementById('toggleBtn')
let msg = document.getElementById('msg');
let toggleBtn2 = document.getElementById('toggleBtn2')
let pswrd2= document.getElementById('pswrd2')
let signupbtn = document.getElementById('signupbtn')
let phoneNumber = document.getElementById('phone').value
let ph = document.getElementById('ph')





// show hide password
toggleBtn.onclick = function(){
    if(pswrd.type == 'password'){
        pswrd.setAttribute('type' , 'text')
        toggleBtn.classList.add('hide')
    }else{
        pswrd.setAttribute('type' , 'password')
        toggleBtn.classList.remove('hide')
    }
}

// show hide password
toggleBtn2.onclick = function(){
    if(pswrd2.type == 'password'){
        pswrd2.setAttribute('type' , 'text')
        toggleBtn2.classList.add('hide')
    }else{
        pswrd2.setAttribute('type' , 'password')
        toggleBtn2.classList.remove('hide')
    }
}



let lowerCase = document.getElementById('lower')
let upperCase = document.getElementById('upper')
let digit = document.getElementById('number')
let specialChar = document.getElementById('special')
let minilength = document.getElementById('length')

function validatePasswordComplexity(data){
    //javascript regular expression pattern
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#\$%\^&\*])')
    const length = new RegExp('(?=.{8,})')


    //lower case validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid')
    }else{
        lowerCase.classList.remove('valid')
    }


    //upper case validation check
    if(upper.test(data)){
        upperCase.classList.add('valid')
    }else{
        upperCase.classList.remove('valid')
    }


    //number validation check
    if(number.test(data)){
        digit.classList.add('valid')
    }else{
        digit.classList.remove('valid')
    }


    //specialCharacter validation check
    if(special.test(data)){
        specialChar.classList.add('valid')
    }else{
        specialChar.classList.remove('valid')
    }


    // validation check
    if(length.test(data)){
        minilength.classList.add('valid')
    }else{
        minilength.classList.remove('valid')
    }


    if(lower.test(data) && upper.test(data) && number.test(data) && special.test(data) && length.test(data)){
        signupbtn.setAttribute('type' , 'submit')
    }else{
        signupbtn.setAttribute('type' , 'button')
        
    }
    
}




// Event listener for password input
pswrd.addEventListener('input', function() {
    validatePasswordComplexity(pswrd.value); // Call the function for complexity checks
});

// Function to check if passwords match
function checkPasswordMatch() {
    let pswrdValue = pswrd.value; // Get current value
    let pswrd2Value = pswrd2.value; // Get current value

    if (pswrdValue.length !== 0) {
        if (pswrdValue === pswrd2Value) {
            msg.textContent = "Password match";
            msg.style.backgroundColor = "#3ae374";
            signupbtn.setAttribute('type' , 'submit')
            msg.classList.add("msg")
            


        } else {
            msg.textContent = "Passwords doesn't match";
            msg.classList.add("msg")
            msg.style.backgroundColor = "#ff4d4d";
            signupbtn.setAttribute('type' , 'button')
        }
    } else {
        msg.style.display = "none" // Clear message if passwords are empty
        msg.style.backgroundColor = "transparent"; // Reset background
    }
}

// Add event listeners for real-time feedback
pswrd.addEventListener('input', function() {
    validatePasswordComplexity(pswrd.value);
    checkPasswordMatch(); // Also check matching on pswrdField change
});

pswrd2.addEventListener('input', checkPasswordMatch);

// Debugging helpers
console.log("Event listeners added to pswrdField and pswrd2Field for real-time checks.");

// logic about phone number valid or invalid

function validatePhoneNumber() {
    let phoneInput = document.getElementById('phone'); // Get the actual input element
    let phoneNumber = phoneInput.value.replace(/\D/g, ''); // Clean input to remove non-digits

    // Check if it is a 10-digit number
    if (phoneNumber.length === 10 && phoneNumber.charAt(0) !== '0' && phoneNumber.charAt(0) !== '1') {
        ph.textContent = "  Valid";
        signupbtn.setAttribute('type', 'submit');
        ph.classList.add("valid")
        ph.classList.remove("invalid")
        ph.style.backgroundColor = "#3ae374"
    } else {
        if(phoneNumber.length == 0){
            ph.style.display = "none"
        }else{
            ph.textContent = "Invalid";
            signupbtn.setAttribute('type', 'button');
            ph.classList.remove("valid")
            ph.classList.add("invalid")
            ph.style.backgroundColor = "#ff4d4d"
        }
    }
}

// Event listener for real-time feedback
document.getElementById('phone').addEventListener('input', validatePhoneNumber);



// microsoft edge hide span function
function detectBrowser() {
    let isMicroEdge = navigator.userAgent.includes("Edg/");
    
    if (isMicroEdge) {
        // Hide the <span> elements in MicroEdge
        document.querySelectorAll('.fieldPt span').forEach(span => {
            span.style.display = 'none';
            pswrd.style.width = '100%'
            pswrd.style.borderRadius = "50%"
            pswrd2.style.width = '100%'
            pswrd.style.borderRadius = "50%" 
        });
    } else {
        // Ensure the <span> elements are shown in other browsers
        document.querySelectorAll('.fieldPt span').forEach(span => {
            span.style.display = 'block';
        });
    }
}

// Run the function on page load
window.onload = detectBrowser;







