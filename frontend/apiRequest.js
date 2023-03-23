import { SurveySystemException } from "./exception.js";

class ApiRequestError extends SurveySystemException {
  constructor(msg) {
    super(msg);
  }
}

export class ApiRequest {
  constructor(formData) {
    this._API_SERVER_PATH = "/backend/index.php";
    this._formData = formData;
  }
  _updateResult(response) {
    const RESULT_DISPLAY_CONTAINER_ID = "survey-result";
    document.getElementById(RESULT_DISPLAY_CONTAINER_ID).innerHTML = response;
  }
  sendForm() {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          this._updateResult(xhr.responseText);
        } else {
          const apiRequestError = new ApiRequestError("HTTP request failed");
          apiRequestError.addError(`Server replied with status ${status}`);
          apiRequestError.displayErrorWindow();
        }
      }
    };
    xhr.open("POST", this._API_SERVER_PATH);
    xhr.send(this._formData);
  }
}
