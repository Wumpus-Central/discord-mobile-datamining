// _runtime/metro/13313__.js
import _mod13285 from "13285__.js";

require = arg1;
const dependencyMap = arg6;

export function handleCallbackErrors(fn, arg1) {
  fn = arg2;
  if (arg2 === undefined) {
    fn = function t() {};
  }
  try {
    return (function maybeHandlePromiseRejection(promise, arg1, fn) {
      closure_0 = arg1;
      closure_1 = fn;
      if (obj.isThenable(promise)) {
        return promise.then(
          (result) => {
            closure_1();
            return result;
          },
          (arg0) => {
            closure_0(arg0);
            closure_1();
            throw arg0;
          },
        );
      } else {
        fn();
        return promise;
      }
      obj = _mod13285;
    })(fn(), arg1, fn);
  } catch (tmp5) {
    tmp3(tmp5);
    tmp2();
    throw tmp5;
  }
}
