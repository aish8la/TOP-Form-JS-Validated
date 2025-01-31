import './stylesheet.css';

class UIElements {
    constructor() {
        this.form = document.querySelector('form');
        this.passwordInputs = this.form.querySelectorAll('input.password');
        this.inputList = this.form.querySelectorAll('.form-input-div input');
    }
}

class ErrorFunctions {

    missingValue(element) {
        if(element.validity.valueMissing) {
            this.addError(element, "This field is required");
        } else {
            this.removeError(element);
        }
    }

    addError(element, errorMessage) {
        const errorElement = element.nextElementSibling;
        console.log(errorElement);
            errorElement.classList.add("error-active");
            errorElement.textContent = errorMessage;
        }

    removeError(element) {
        const errorElement = element.nextElementSibling;
        errorElement.classList.remove("error-active");
        errorElement.textContent = "";
    }

    checkEmail(emailInput) {
        const invalidEmail = emailInput.validity.typeMismatch;
        if(invalidEmail) {
            this.addError(emailInput, "Enter a valid email address");
        } else {
            this.missingValue(emailInput);
        }   
    }

    matchPassword(elementOne, elementTwo) {
        if(elementOne.value !== elementTwo.value) {
            elementOne.setCustomValidity("Password does not match");
            elementTwo.setCustomValidity("Password does not match");
            this.addError(elementOne, "Password does not match");
            this.addError(elementTwo, "Password does not match");
        } else {
            elementOne.setCustomValidity("");
            elementTwo.setCustomValidity("");
            this.missingValue(elementOne);
            this.missingValue(elementTwo);
        }
    }

    submitForm(inputNodeList) {
        inputNodeList.forEach(element => {
            if(element.matches('[type=email]')) {
                console.log("fdf")
            }
        });
    }
}

class EventHandlers {

    constructor(elementObject, errorFunctionObject) {
        this.elements = elementObject;
        this.errorFunctions = errorFunctionObject;
    }

    attachEventListener() {
        
        this.elements.form.addEventListener("input", e => {

            if (e.target.id === "email") {;
                this.errorFunctions.checkEmail(e.target);
            }
        });

        this.elements.form.addEventListener("input", e => {
            if(e.target.classList.contains("password")) {
                this.errorFunctions.matchPassword(this.elements.passwordInputs[0], this.elements.passwordInputs[1]);
            }
        })
    }
}

const elementsObj = new UIElements();
const errorFunctionObj = new ErrorFunctions()
const eventObj = new EventHandlers(elementsObj, errorFunctionObj);

eventObj.attachEventListener();