function renderText(userEnteredValue){
    initialValue = document.querySelector(".text1").innerText;
    if(initialValue === "0"){
      initialValue = '';
    }
    bufferValue = initialValue + userEnteredValue;
    document.querySelector(".text1").innerText = initialValue+userEnteredValue;
    return bufferValue;
  }
  
  function doMath(currentValue, previousOperator, previousValue) {
    switch (previousOperator) {
      case "+":
      return previousValue = previousValue + parseInt(currentValue);
      break;
      case "-":
      return previousValue = previousValue - parseInt(currentValue);
      break;
      case "X":
      return previousValue = previousValue * parseInt(currentValue);
      break;
      case "÷":
      return previousValue = previousValue / parseInt(currentValue);
      break;
      default:
  
    }
  }
  
  //this just deletes the numbers one by one
  function deleteNumbers() {
    let enteredText = document.querySelector(".text1").innerText;
    enteredTextSubStr = document.querySelector(".text1").innerText = enteredText.substring(0, (enteredText.length)-1);
    if (enteredText.length == 1) {
      document.querySelector(".text1").innerText = "0";
    }
    return enteredTextSubStr;
  }
  //getting the value when clicked on whole document
  function init(){
  
    let currentValue;
    let previousValue = 0;
    let currentOperator;
    let previousOperator;
  
    document.addEventListener("click", function (event) {
      /*it simply renderes the userEnteredValue to the bufferText*/
      userEnteredValue = event.target.innerText;
      if(!isNaN(parseInt(userEnteredValue))){
        currentValue = renderText(userEnteredValue);
      }
      /* rendering the value ends here*/
  
        /* everything else is here from clear button, backspace to different operation*/
      else{
        currentOperator = event.target.innerText;
        //check if previousOperator is already avalaible
        if (event.target.innerText === "C") {
          return document.querySelector(".text1").innerText = "0";
        }
        else if (event.target.innerText === "←") {
          return deleteNumbers();
        }
        else if (previousOperator != undefined) {
          if (currentOperator == "=") {
            returnValue = doMath(currentValue, previousOperator, previousValue);
            previousValue = returnValue;
            return document.querySelector(".text1").innerText = returnValue;
          }
          else {
            returnValue = doMath(currentValue, previousOperator, previousValue);
            previousOperator = currentOperator;
            previousValue = returnValue;
          }
          //uncomment after removing return on 47
          //previousValue = returnValue;
        }
        else if (previousOperator === undefined) {
          previousValue = parseInt(currentValue);
          previousOperator = currentOperator;
        }
        //setting the enteredText to initialValue
        document.querySelector(".text1").innerText = "0";
      }
    });
  }
  
  init();