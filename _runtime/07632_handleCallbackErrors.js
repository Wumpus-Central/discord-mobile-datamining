// === Module 7632: handleCallbackErrors ===

// Module 7632 (handleCallbackErrors)
const require = arg1;
const dependencyMap = arg6;
arg5.handleCallbackErrors = function handleCallbackErrors(arg0, arg1) {
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {

    };
  }
  try {
    return (function maybeHandlePromiseRejection(promise, arg1, fn) {
      const callback = arg1;
      const table = fn;
      if (obj.isThenable(promise)) {
        return promise.then((arg0) => {
          callback2();
          return arg0;
        }, (arg0) => {
          callback(arg0);
          callback2();
          throw arg0;
        });
      } else {
        fn();
        return promise;
      }
      obj = callback(table[0]);
    })(arg0(), arg1, fn);
  } catch (tmp5) {
    tmp3(tmp5);
    tmp2();
    throw tmp5;
  }
};