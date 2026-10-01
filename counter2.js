/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  let current = init;

  return {
    // increment() increases the current value by 1 and returns it.
    increment: function () {
      current += 1;
      return current;
    },
    // decrement() decreases the current value by 1 and returns it.
    decrement: function () {
      current -= 1;
      return current;
    },
    // reset() resets the current value to the initial value and returns it.
    reset: function () {
      current = init;
      return current;
    },
  };
};
