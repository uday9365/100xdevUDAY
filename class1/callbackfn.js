function sum(num1, num2, fnToCall){
  let result = num1 + num2;
  fnToCall(result);
}

function displayresult(data){
  console.log("Result of the sum is " + data)
}

function displayresultpassive(data){
  console.log("Sum's result is " + data)
}

const ans = sum(1, 3, displayresult)