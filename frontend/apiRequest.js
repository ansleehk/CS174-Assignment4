import { SurveySystemException } from './exception.js'

class ApiRequestError extends SurveySystemException{
    addError(msg){
        this.errorStack.push(`HTTP Error: ${msg}`)
    }
}

export class ApiRequest{

    constructor(formData){
        this.API_SERVER_PATH = "/backend/index.php";
        this.formData = formData;
    }
    _updateResult(response){
        const RESULT_DISPLAY_CONTAINER_ID = "survey-result"
        document.getElementById(RESULT_DISPLAY_CONTAINER_ID).innerHTML = response;
    }
    sendForm(
        _updateResultFunc
    ){
        const xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = () => {
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                const status = xmlRequest.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    this._updateResult(xmlRequest.responseText);
                } else {
                    const apiRequestError = new ApiRequestError();
                    apiRequestError.addError(`Server replied with status ${status}`)
                    apiRequestError.displayErrorWindow();
                }  
            }
        }
        xmlRequest.open("GET", this.API_SERVER_PATH);
        xmlRequest.send(this.formData);

    }

}
