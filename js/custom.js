$(document).ready(function () {

    // Here we put our global variables
    var userInput = $("input");
    var robotMessage = document.getElementById('robotMessages');
    
    // 1) Make the function that takes in input form user and renders some output text from 
    function start(invar, outvar) {
        
        // Use 3 if statements to make same text
        // if (<something here> == ...) {
        //     <somethinghere>("some text")
        // }
    }

    // 2) Make the out function that couples the userinput and chatbot output to the screen
    var out = function(outtext) {

        // 2.1) check here if the function works in the developer console with a console.log
        // the function that makes output
        console.log('text', outtext);
    
        // 2.2) create a DOM paragraph with document.createElement and store it to variable named newPara


        // 2.3)create a DOM text with document.createTextNode that contains the argument of hwat goes in the function out and store it to varriable named paraTxt
    
        
        // 2.4) Create a DOM to append the variable paraText to variable newPara so that it is displayed on the screen
        newPara.appendChild(paraText);

        //2.5) Create a DOM to append the variable newPara to the  div with id "robotoMessages"
        robotMessage.append(newPara);
    }

    //Form submit user input 
    $("form").submit(function (e) {
        e.preventDefault();
        var userInputValue = userInput.val();
        $(chatbot.userMessage(userInputValue)).insertBefore("form");
        start(userInputValue, out);
        
    });

    // The function call of function start
    start("", out);

});

