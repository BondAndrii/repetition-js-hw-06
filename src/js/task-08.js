
const registerFormRef = document.querySelector(".login-form ");

const onFormSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const { elements } = currentTarget;
    const { email, password } = elements;

    const userData = {
                email: email.value,
                password: password.value
            }   
    const log = () => {
        console.log(userData);
        event.currentTarget.reset();
    }

    userData.email === '' || userData.password === '' ?
        alert("Всі поля повинні бути заповнені") : log();

    
    
}

registerFormRef.addEventListener('submit', onFormSubmit);


