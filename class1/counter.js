let count = 30;

function countdown(){
  if(count > 0){
    count--;
  }else if(count == 0){
    return;
  }
  console.log(count)
}

setInterval(countdown, 1 * 1000)