function compose(functions) {
  return function (x) {
    let result = x;

    // Apply functions from right to left
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
}
