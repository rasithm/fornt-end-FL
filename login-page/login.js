let pswrd = document.getElementById('pswrd')
let toggleBtn = document.getElementById('toggleBtn')

let toggleBtn2 = document.getElementById('toggleBtn2')
let pswrd2= document.getElementById('pswrd2')
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

function checkpassword(data){
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

}






// microsoft edge hide span function
function detectBrowser() {
    let isMicroEdge = navigator.userAgent.includes("Edg/");
    
    if (isMicroEdge) {
        // Hide the <span> elements in MicroEdge
        document.querySelectorAll('.fieldPt span').forEach(span => {
            span.style.display = 'none';
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
