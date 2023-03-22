export class SurveySystemException extends Error{
    constructor(){
        super();
        this.errorStack = new Array();
    }
    addError(msg){
        this.errorStack.push(msg);
    }
    displayErrorWindow(){
       alert(this.errorStack.toString())
    }
}

