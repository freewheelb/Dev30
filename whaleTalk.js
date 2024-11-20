const inputText = 'This is the song that does not end. Yes it goes on and on my friends! We started singing...';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let results = [];

// This is the FUNCTION to cycle through the string text, converting all characters to lower case.
function cycleText(text, array){
  text = text.toLowerCase();


// CYCLES THROUGH INPUT TEXT
  for (let i = 0; i < text.length; i++){
    const textChar = text[i];
    
   // CYCLES THROUGH ENTIRE VOWEL ARRAY
  for (let j = 0; j < array.length; j++){
  const arrayChar = array[j];
  // console.log(arrayChar);
    
  // IF MATCHES ARE FOUND, THEY'RE PUSHED
    if (textChar === arrayChar) {
      results.push(textChar);
     // console.log(textChar);

    // IF ADDITIONAL MATCHES ARE FOUND FOR "E" OR "U" THEY ARE ALSO PUSHED
    if (arrayChar === "e" || arrayChar === "u") {
      for (let k = 0; k < arrayChar.length; k++) {
      results.push(textChar)
      }
      }
    }
    }
  }
}
// CALLING THE FUNCTION
cycleText(inputText, vowels);

// SAVING THE ARRAY IN A VARIABLE AND CONVERTING TO UPPPER CASE
resultsString = results.join('').toUpperCase();

console.log(resultsString);
