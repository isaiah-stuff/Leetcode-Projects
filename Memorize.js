/**
 * @param {Function} fn
 * @return {Function}
 */
function memorize(fn) {
  const cache = {};

  return function (...args) {
    // Create a unique key based on the arguments
    const key = args.join(",");

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
