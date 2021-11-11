const formValidator = (form, fieldsConfig) => {
    const validateField = () => {

    }
    const validateOnchange = () => {
        fieldsConfig.forEach((field) => {
            const fieldElement = form.querySelector(`[name="${field.name}"]`);
            fieldElement.addEventListener("input", e => {
                console.log("input value", e.target.value);
            });
        });
    }

    const validateOnSubmit = () => {
        form.addEventListener("submit", e => {
            e.preventDefault();
            console.log("submit")
        })
    }
    validateOnSubmit();
    validateOnchange();
}

const fieldsConfig = [
    { name: "first_name", rules: [{ required: true, message: "first name is required" }] }
];
const form = document.querySelector("#user_registration_form");

formValidator(form, fieldsConfig);