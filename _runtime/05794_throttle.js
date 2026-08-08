// _runtime/05794_throttle.js
arg5.throttle = function throttle(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    if (null == timeout) {
      const self = this;
      callback.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let c2;
      }, closure_1);
    }
  };
};