import './stylesheet.css';

class UIElements {
    constructor() {
        this.form = document.querySelector('form');
    }
}

class ErrorFunctions {

    missingValue(element) {
        return element.validity.valueMissing;
    }

    typeMismatch(element) {
        return element.validity.typeMismatch;
    }

    toggleError(isError, element, errorMessage) {
        const errorElement = element.nextElementSibling;
        if(isError) {
            errorElement.classList.add("error-active");
            errorElement.textContent = errorMessage;
            return true;
        } else {
            errorElement.classList.remove("error-active");
            errorElement.textContent = "";
            return false;
        }
    }

    checkEmail(emailInput) {
        if(this.toggleError(this.missingValue(emailInput), emailInput, "Email is required")) {
            return;
        }
        if(this.toggleError(this.typeMismatch(emailInput), emailInput, "Enter a valid email address")) {
            return;
        }
            
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
        })
    }
}

const elementsObj = new UIElements();
const errorFunctionObj = new ErrorFunctions()
const eventObj = new EventHandlers(elementsObj, errorFunctionObj);

eventObj.attachEventListener();