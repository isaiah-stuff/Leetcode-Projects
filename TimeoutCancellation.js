/*
setTimeout schedules fn(...args) to run after t milliseconds
It returns a timerId
cancelFn calls clearTimeout(timerId) to stop execution if it hasn't run yet
*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timerId);
  };
};
