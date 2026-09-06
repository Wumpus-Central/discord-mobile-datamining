// === Module 732: ? ===

// Module 732
import _mod692 from "module_692" /* 692 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const handleCallbackErrors = function handleCallbackErrors(fn, arg1) {
  fn = arg2;
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
    const tmp5 = fn();
    return (function maybeHandlePromiseRejection(promise, arg1, fn, fn2) {
      closure_0 = arg1;
      closure_1 = fn;
      closure_2 = fn2;
      if (obj.isThenable(promise)) {
        return promise.then((result) => {
          closure_1();
          closure_2(result);
          return result;
        }, (arg0) => {
          closure_0(arg0);
          closure_1();
          throw arg0;
        });
      } else {
        fn();
        fn2(promise);
        return promise;
      }
      obj = _mod692;
    })(tmp5, arg1, fn, fn2);
  } catch (tmp10) {
    tmp3(tmp10);
    tmp2();
    throw tmp10;
  }
};