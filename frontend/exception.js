export class SurveySystemException extends Error{
    constructor(msg){
        super(msg);
        this.errorStack = new Array();
    }
    addError(msg){
        this.errorStack.push(msg);
    }
    displayErrorWindow(){
       alert(`${this.message}:\n ${this.errorStack.toString()}`)
    }
}

