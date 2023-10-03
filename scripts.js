
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.style.color = "red"
/**
 * A function that checks if a  number is whole or decimal number .
 * @param {number} number -the number entered
 * @returns If it has a decimal part, it returns true; otherwise, it returns false.
 */
  const hasDecimal= (number)=>{
    return number % 1 !== 0;
  }

  if (hasDecimal){
result.innerHTML= Math.floor(dividend/divider)
  }
  

  if (dividend==='' || divider===''){
result.innerHTML='Division not performed. Both values are required in inputs. Try again.'
result.style.color = "red"
  }
  else {
    result.style.color = ''
  }
/**
 * A function to check if a number is an integer
 * @param {*} number 
 * @returns 
 */
  function isNegative(number) {
    return number < 0;
  }
  

});

