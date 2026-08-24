// _runtime/00867_handleCallbackErrors.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.handleCallbackErrors = function handleCallbackErrors(arg0, arg1) {
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {

    };
  }
  let fn2 = arg3;
  if (arg3 === undefined) {
    fn2 = function o() {

    };
  }
  try {
    const tmp5 = arg0();
    return (function maybeHandlePromiseRejection(promise, arg1, fn, fn2) {
      const callback = arg1;
      const table = fn;
      closure_2 = fn2;
      if (obj.isThenable(promise)) {
        return promise.then((arg0) => {
          callback2();
          callback3(arg0);
          return arg0;
        }, (arg0) => {
          callback(arg0);
          callback2();
          throw arg0;
        });
      } else {
        fn();
        fn2(promise);
        return promise;
      }
      obj = callback(table[0]);
    })(tmp5, arg1, fn, fn2);
  } catch (tmp10) {
    tmp3(tmp10);
    tmp2();
    throw tmp10;
  }
};