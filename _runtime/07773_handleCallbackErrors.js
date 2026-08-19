// _runtime/07773_handleCallbackErrors.js
const require = arg1;
const dependencyMap = arg6;
arg5.handleCallbackErrors = function handleCallbackErrors(fn) {
  fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {

    };
  }
  try {
    return (function maybeHandlePromiseRejection(promise, arg1, fn) {
      const callback = arg1;
      const table = fn;
      if (obj.isThenable(promise)) {
        return promise.then((result) => {
          callback2();
          return result;
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
    })(fn(), arg1, fn);
  } catch (tmp5) {
    tmp3(tmp5);
    tmp2();
    throw tmp5;
  }
};