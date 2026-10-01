/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (other) {
      if (val === other) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (other) {
      if (val !== other) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// input like () => expect(5).toBe(5)
