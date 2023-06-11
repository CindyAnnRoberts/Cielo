"use strict";

//********************** Functions ***********************
document.getElementById("guess");
document.getElementById("submitGuess");

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log('Random Number', randomNumber);
    

function checkGuess() {
    let myGuess = guess.value
    if (myGuess == randomNumber) {
        feedback.textContent = "Congratulations, you won a free dessert!"
    } else if (myGuess > randomNumber) {
        feedback.textContent = `You guessed ${myGuess}, it was too high. Try again!`
    } else if (myGuess < randomNumber) {
        feedback.textContent = `You guessed ${myGuess}, it was too high. Try again! `
    }console.log(randomNumber);
    document.getElementById('guess').value = "";
  }
  submitGuess.addEventListener('click', checkGuess)
 

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
  
document.getElementById("defaultOpen").click();


// Preventing Default Form Bahavior

function validateForm(e){
		e.preventDefault();

	let fNameInput = document.getElementById("fName");
	
	let errorSpan = fNameInput.previousElementSibling;
	
	let outputP = document.getElementById("defaultOutput");
	
		errorSpan.innerHTMl = "";
		outputP.innerHTML = "";
	
	if(fNameInput.value === ""){
		errorSpan.innerHTML = "Please enter your full name";
	}else{ outputP.innerHTML = "Hello, " + fName.value + "! Way to prevent that default form behavior!";

	// clear out the input
		fNameInput.value = "";
	}
}
// for our validateForm function
document.getElementById("submit").addEventListener("click", validateForm);


