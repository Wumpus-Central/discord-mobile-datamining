// === Module 6027: throttle ===

// Module 6027 (throttle)
arg5.throttle = function throttle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    if (null == timeout) {
      const self = this;
      callback.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c2 = undefined;
      }, closure_1);
    }
  };
};