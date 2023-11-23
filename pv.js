const passwordInput = document.querySelector(".passBox input")
const eyeIcon = document.querySelector(".passBox i")
const conditionsList = document.querySelectorAll(".list_conditions li")

const conditions = [
    { regex: /.{8,}/, index: 0},
    { regex: /[0-9]/, index: 1},
    { regex: /[a-z]/, index: 2},
    { regex: /[A-Z]/, index: 3},
    { regex: /[^a-zA-Z0-9]/, index: 4},
    
]

passwordInput.addEventListener("keyup", (e) => {
    conditions.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const conditionItem = conditionsList[item.index];

        if(isValid) {
            conditionItem.firstElementChild.className = "fa-solid fa-check";
        }else {
            conditionItem.firstElementChild.className = "fa-solid fa-circle";
        }

    });
});

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "": "-slash"}`;
});