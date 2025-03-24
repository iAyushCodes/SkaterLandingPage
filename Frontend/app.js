const waitlistBtn = document.getElementById("waitlist-btn");
const waitlistInput = document.getElementById("waitlist-input");
const waitlist = document.getElementById("waitlist");
const container = document.getElementById("main");
const navBtn = document.getElementById("nav-btn");

waitlistBtn.addEventListener("click", function() {
    const email = waitlistInput.value;
    console.log(email);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === "") {
        const warning = document.createElement("div")
        warning.classList = `text-gray-500 font-light text-center`;
        warning.textContent = "Enter an email address!"
        main.appendChild(warning);
        setTimeout(() => {
            warning.remove();
        }, 2000);
    }
    else if(!emailPattern.test(email)) {
        const warning = document.createElement("div")
        warning.classList = `text-gray-500 font-light text-center`;
        warning.textContent = "Enter a valid email address!"
        main.appendChild(warning);
        setTimeout(() => {
            warning.remove();
        }, 2000);
    }
    else {
        waitlist.innerHTML = "";
        const successMessage = document.createElement("div");
        successMessage.innerHTML = `<p class="text-lg font-bold">Thank You For Joining!</p><br><p>We'll keep you updated on our progress and let you know when we launch</p>`
        successMessage.classList = `bg-blue-200 p-3 mx-2 my-2 text-center border-blue-300 rounded-xl`
        waitlist.appendChild(successMessage);
    }
})

navBtn.addEventListener("click", function() {
    waitlist.focus();
    if(window.innerWidth >= 768){
        waitlistInput.style.boxShadow = '0 0 5px 4px rgba(0, 123, 255, 0.3)';
    }
})

waitlistInput.addEventListener("blur", function() {
    if(window.innerWidth >= 768){
        waitlistInput.style.boxShadow = '';
    }
})

waitlistInput.addEventListener("click", function() {
    if(window.innerWidth >= 768){
        waitlistInput.style.boxShadow = '0 0 5px 4px rgba(0, 123, 255, 0.3)';
    }
})