import { SurveySystemException } from './exception.js'
import { ApiRequest } from './apiRequest.js';

class FormValidationError extends SurveySystemException{
    constructor(msg){
        super(msg);
    }
}

class FormHandler{
    constructor(submitEvent){
        submitEvent.preventDefault();
        this.inputForm = new FormData(document.forms["survey-form"]);
        this.inputFormLength = Array.from(this.inputForm.keys()).length;
        this.main();
    }
    
    async validateFormEmpty(){
        return new Promise((resolve, reject) => {
            const formValidationError = new FormValidationError("Form emptiness verification failed");
            let inputProcessed = 0;
            let isErrorOccurred = false;
            this.inputForm.forEach((value, key)=>{
                if (value.length === 0){
                    isErrorOccurred = true;
                    formValidationError.addError(`The ${key} is required.\n`)
                }
                inputProcessed ++;
                if (inputProcessed == this.inputFormLength) {
                    if (isErrorOccurred){
                        formValidationError.displayErrorWindow();
                        reject("Empty input found");
                    } resolve(true);
                };
            })
        })
    }
    _verifyIsInt(value) {
        return !isNaN(value) && 
               parseInt(Number(value)) == value && 
               !isNaN(parseInt(value, 10));
      }
    validateInteger(){
        let inputProcessed = 1;
        let processValue = `label1-value`;
        let isErrorOccurred = false;
        const formValidationError = new FormValidationError("Form integer validation failed");
        while (inputProcessed <= this.inputFormLength / 2){
            const VALUE = this.inputForm.get(processValue);
            if (!this._verifyIsInt(VALUE)) {
                formValidationError.addError(`The ${processValue} is required to be an integer.\n`);
                isErrorOccurred = true;
            }
            inputProcessed ++;
            processValue = `label${inputProcessed}-value`
        }
        if (isErrorOccurred){
            formValidationError.displayErrorWindow();
            return false;
        } else {
            return true;
        }
    }
    async main(){
        try{
            const isFormEmptyCheckPass = await this.validateFormEmpty();
            const isFormIntCheckPass = this.validateInteger();
            if (isFormEmptyCheckPass && isFormIntCheckPass){
                const apiRequest = new ApiRequest(this.inputForm);
                apiRequest.sendForm();
            }
        } catch (err) {
            console.log(err);
        }
    }
}

window.FormHandler = FormHandler;