/*Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.*/

const countSheep = function(sheepNo) {
    if (sheepNo === 0) {
       return "All sheep jumped over the fence"
    }
 
  return`${sheepNo}: Another sheep jumps over the fence \n`+ countSheep(sheepNo-1);
}

let sheepNo= 3;
console.log(countSheep(sheepNo))