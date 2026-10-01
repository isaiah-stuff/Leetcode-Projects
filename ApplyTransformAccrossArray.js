/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

/* The map function takes an array and a function as arguments 
 and applies the function to each element of the array, 
 returning a new array with the results.
*/
var map = function (arr, fn) {
  const result = [];

  // Loop through each element in the input array and apply the function to it
  for (let i = 0; i < arr.length; i++) {
    //item in array and its index are passed to the function, and the result is stored in the corresponding index of the result array
    result[i] = fn(arr[i], i);
  }

  return result;
};
