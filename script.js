const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const isPalindrome = array => {
  while (array.length > 1) {
    console.log(array)
    let first = array.shift();
    let last = array.pop();
    if (first !== last) {
      return false
    }
  }
  console.log(array)
  return true
}

const getResult = input => {
  let originalInput = input;

  if (input === "") {
    alert('Please input a value');
    return;
  }

  const regex = /[^a-zA-Z0-9]/g;
  input = input.replace(regex, '');
  input = input.toUpperCase();
  console.log(input);

  let inputArray = [];
  for (const char in input) {
    inputArray.push(input[char]);
  }

  let test = isPalindrome(inputArray);
  console.log(test)

  if (test === true) {
    result.innerHTML = `${originalInput} is a palindrome`
  } else {
    result.innerHTML = `${originalInput} is not a palindrome`
  }

}

checkBtn.addEventListener('click', () => {
  getResult(textInput.value);
  textInput.value = ""
  });
