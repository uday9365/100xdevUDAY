let arr = [1, 34, 2, 45, 24, -3, 98, 5, -98]
let biggest_num = 0;

for(let i = 0; i < arr.length; i++){
  if(arr[i] > biggest_num){
    biggest_num = arr[i]
  }
}
console.log(biggest_num)