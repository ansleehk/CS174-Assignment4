import { SurveySystemException } from "./exception.js";
import { ApiRequest } from "./apiRequest.js";

class FormValidationError extends SurveySystemException {
  constructor(msg) {
    super(msg);
  }
}

class FormHandler {
  constructor(submitEvent) {
    submitEvent.preventDefault();
    this._inputForm = new FormData(document.forms["survey-form"]);
    this._inputFormLength = Array.from(this._inputForm.keys()).length;
    this._main();
  }

  async _validateFormEmpty() {
    return new Promise((resolve, reject) => {
      const formValidationError = new FormValidationError(
        "Form emptiness verification failed"
      );
      let inputProcessed = 0;
      let isErrorOccurred = false;
      this._inputForm.forEach((value, key) => {
        if (value.length === 0) {
          isErrorOccurred = true;
          formValidationError.addError(`The ${key} is required.\n`);
        }
        inputProcessed++;
        if (inputProcessed == this._inputFormLength) {
          if (isErrorOccurred) {
            formValidationError.displayErrorWindow();
            reject("Empty input found");
          }
          resolve(true);
        }
      });
    });
  }
  _verifyIsInt(value) {
    return (
      !isNaN(value) &&
      parseInt(Number(value)) == value &&
      !isNaN(parseInt(value, 10))
    );
  }
  _validateInteger() {
    let inputProcessed = 1;
    let processValue = `label1-value`;
    let isErrorOccurred = false;
    const formValidationError = new FormValidationError(
      "Form integer validation failed"
    );
    while (inputProcessed <= this._inputFormLength / 2) {
      const VALUE = this._inputForm.get(processValue);
      if (!this._verifyIsInt(VALUE)) {
        formValidationError.addError(
          `The ${processValue} is required to be an integer.\n`
        );
        isErrorOccurred = true;
      }
      inputProcessed++;
      processValue = `label${inputProcessed}-value`;
    }
    if (isErrorOccurred) {
      formValidationError.displayErrorWindow();
      return false;
    } else {
      return true;
    }
  }
  async _main() {
    try {
      const isFormEmptyCheckPass = await this._validateFormEmpty();
      const isFormIntCheckPass = this._validateInteger();
      if (isFormEmptyCheckPass && isFormIntCheckPass) {
        const apiRequest = new ApiRequest(this._inputForm);
        apiRequest.sendForm();
      }
    } catch (err) {
      console.log(err);
    }
  }
}

window.FormHandler = FormHandler;
