const form = document.querySelector(".intro__form")

const formInputs = form.querySelectorAll("input")

formInputs.forEach(input => {
    input.addEventListener("invalid", (event) => {
        event.preventDefault()

        input.classList.add("invalid")

    })
})


form.addEventListener("submit", (event) => {
    event.preventDefault()


    const fname = form.fname;
    const lname = form.lname;
    const email = form.email;
    const password = form.password;

    [fname, lname, email, password].forEach(input => {
        input.classList.remove("invalid")
    })

    const formData = {
        "fname": fname.value,
        "lname": lname.value,
        "email": email.value,
        "password": password.value,
    }

    console.log(formData)



})