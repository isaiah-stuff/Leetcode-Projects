class TimeLimitedCache {
  constructor() {
    this.cache = {};
  }
}

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exists = this.cache[key] !== undefined;

  // If key exists, clear old timeout
  if (exists) {
    clearTimeout(this.cache[key].timeoutId);
  }

  const timeoutId = setTimeout(() => {
    delete this.cache[key];
  }, duration);

  this.cache[key] = {
    value: value,
    timeoutId: timeoutId,
  };

  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  return this.cache[key] === undefined ? -1 : this.cache[key].value;
};

TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};
