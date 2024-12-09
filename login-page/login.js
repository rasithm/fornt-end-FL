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






// Function to check if passwords match
function checkPasswordMatch() {
    let pswrdValue = pswrd.value.trim();
    let pswrd2Value = pswrd2.value.trim();

    if (pswrdValue === "" && pswrd2Value === "") {
        msg.textContent = "";
        msg.style.backgroundColor = "transparent";
        msg.classList.add('msg')
        signupbtn.setAttribute("type", "button");
        return;
    }

    if (pswrdValue === pswrd2Value) {
        msg.textContent = "Password match";
        msg.style.backgroundColor = "#3ae374";
        msg.classList.add(' msg')
        
        signupbtn.setAttribute("type", "submit");
    } else {
        msg.textContent = "Passwords don't match";
        msg.style.backgroundColor = "#ff4d4d";
        msg.classList.add('msg')
        signupbtn.setAttribute("type", "button");
    }
}

pswrd.addEventListener('input', function () {
    validatePasswordComplexity(pswrd.value);
    checkPasswordMatch();
});

pswrd2.addEventListener('input', checkPasswordMatch);

// Debugging helpers
console.log("Event listeners added to pswrdField and pswrd2Field for real-time checks.");

// logic about phone number valid or invalid

function validatePhoneNumber() {
    let phoneInput = document.getElementById('phone').value.replace(/\D/g, ''); // Remove non-digits
    let ph = document.getElementById('ph');
    let center = document.getElementById('center');

    if (phoneInput.length === 10 && !['0', '1'].includes(phoneInput.charAt(0))) {
        // Valid phone number
        ph.textContent = "Valid phone number";
        ph.style.backgroundColor = "#3ae374";
        ph.style.display = "inline-block";
        ph.classList.add("valid");
        ph.classList.remove("invalid");
        center.style.marginTop = "55px"; // Adjust margin for valid message
    } else {
        if (phoneInput.length === 0) {
            // Clear message and reset margin if empty
            ph.textContent = "";
            ph.style.backgroundColor = "transparent";
            ph.style.display = "none";
            center.style.marginTop = "0px"; // Reset margin to 0
        } else {
            // Invalid phone number
            ph.textContent = "Invalid phone number";
            ph.style.backgroundColor = "#ff4d4d";
            ph.style.display = "inline-block";
            ph.classList.add("invalid");
            ph.classList.remove("valid");
            center.style.marginTop = "55px"; // Adjust margin for invalid message
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







