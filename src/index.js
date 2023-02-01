
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix == 'undefined') {
        return [];
      } else  if (matrix.length === 0) {
        return [];
    } else {   
  let newArray = matrix.map((el, i) => {
   if (i % 2 !== 0) {
   el.reverse()
   }
});
  
    return matrix.flat();
 }
  }
  
   


