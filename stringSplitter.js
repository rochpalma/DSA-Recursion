/*Write a recursive function that splits a string based on a separator 
(similar to String.prototype.split). Don't use JS array's split function 
to solve this problem.*/

const stringSplitter = function(str) {
    var index = str.indexOf('/');
    if (index == -1) 
        return [str];

  return [str.slice(0, index)].concat(stringSplitter(str.slice(index + 1), '/'))
    
}

console.log(stringSplitter('02/20/2020'))