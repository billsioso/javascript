class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.previousOperandTextElement = previousOperandTextElement 
    }
    clear(){

    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(operation){
        
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = decument.querySelector('[data-equals]');
const deleteButton = decument.querySelector('[data-delete]');
const allClearButton = decument.querySelector('[data-all-clear]');
const previousOperandTextElement = decument.querySelector('[data-previous-operand]');
const currentOperandTextElement = decument.querySelector('[data-current-operand]');
