const captcha = document.querySelector(".captch_box input");
const refresh = document.querySelector(".refresh");
const capinput = document.querySelector(".captcha input");
const subbutton = document.querySelector(".button");
const message = document.querySelector(".message");

let captext = null;
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captext = changeString.join(" ");
    captcha.value = captext;
    console.log(captext);
};
const refreshBtnClick = () => {
    generateCaptcha();
    capinput.value = "";
    captchaKeyUpValidate();
};
const captchaKeyUpValidate = () => {

    subbutton.classList.toggle("disabled", !capinput.value);
    if (!capinput.value) message.classList.remove("active");
};

const submitBtnClick = () => {
    captext = captext.split("").filter((char) => char !== " ").join("");
    message.classList.add("active");
    if (capinput.value === captext) {
        message.innerText = "Entered captcha is correct";
        message.style.color = "#826afb";
        location.href = "index.html";

    } else {
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#FF2525";
    }
};
refresh.addEventListener("click", refreshBtnClick);
capinput.addEventListener("keyup", captchaKeyUpValidate);
subbutton.addEventListener("click", submitBtnClick);
generateCaptcha();