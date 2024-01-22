// login function, user fills an incorrect password, error and prompted to sign up. 
 function login (password) {
  if (password === "GuyJesus@GAG"){
    return "Successfuly logged In"
  } else {
    return "Error, please sign up if you have not"
  }
}
console.log(login("mensabr"));

  //Multiplication Function
  function multiply (a, b) {
    return a * b
  }

let result = multiply (10, 45);
console.log(`The multiplication is ${result}`);

//Multiplication Function
  function multiply (a, b) {
    return a * b
  }

let results = multiply (12, 16);
console.log(`The multiplication is ${results}`);

//concatOdds Function
function concatOdds(array) {
  let result = "";
  for(let i = 0; i < array.length; i++) {
  if(array[i] % 2 !== 0) {
  result += array[i];
  }
  }
 
  return result;
  }
  console.log("Concatenated odd numbers: " + result);