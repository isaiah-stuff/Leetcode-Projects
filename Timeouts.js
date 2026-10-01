/*
setTimeout(resolve, millis) waits for the given time
Then it calls resolve(), which fulfills the promise
Since the function is async, it returns a promise automatically
*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
