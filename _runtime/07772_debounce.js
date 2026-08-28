// === Module 7772: debounce ===

// Module 7772 (debounce)
arg5.debounce = function debounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    const self = this;
    closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(self, callback);
    }, self);
  };
};