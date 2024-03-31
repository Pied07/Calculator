let currentDisplay = ''
resultDisplay = false

function display(value){
    if(currentDisplay === '' || resultDisplay){
        currentDisplay = value
    } 
    else{
        currentDisplay += value
    }
    updateDisplay()
    resultDisplay = false
}

function updateDisplay(){
    const displayElement = document.getElementById('display')
    displayElement.textContent = currentDisplay
}

function AllClear(){
    currentDisplay = ''
    updateDisplay()
}

function DeleteLast(){
    currentDisplay = currentDisplay.slice(0,-1)
    updateDisplay()
}

function FinalResult(){
    try{
        const result = eval(currentDisplay)
        currentDisplay += "\n" + result.toString()
        updateDisplay()
    }
    catch (error) {
        currentDisplay += "\nSyntax Error!"
        updateDisplay()
    }
    resultDisplay = true
}