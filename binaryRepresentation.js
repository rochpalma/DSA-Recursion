/*Write a recursive function that prints out the binary 
representation of a given number. For example, 
the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.*/

const binaryRep = function(input){
    if(input<=0){
        return '';
    } 
    let binary = Math.floor(input%2);
    return binaryRep(Math.floor(input/2)) + binary
}
console.log(binaryRep(5))