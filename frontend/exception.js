export class SurveySystemException extends Error {
  constructor(msg) {
    super(msg);
    this._errorStack = new Array();
  }
  addError(msg) {
    this._errorStack.push(msg);
  }
  displayErrorWindow() {
    alert(`${this.message}:\n ${this._errorStack.toString()}`);
  }
}
