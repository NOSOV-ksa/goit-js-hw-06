const form = document.querySelector('.login-form');

const userInfo = {};


const onSubmitForm = (event) => {
    event.preventDefault();

    const {
        elements: { password, email }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert("Все поля должны быть заполнены")
    }

    userInfo.email = email.value;
    userInfo.password = password.value;

    form.reset()

};

form.addEventListener('submit', onSubmitForm);