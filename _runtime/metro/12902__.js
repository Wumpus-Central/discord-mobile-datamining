// _runtime/metro/12902__.js
import _mod12874 from "12874__.js";

require = arg1;
const dependencyMap = arg6;

export const handleCallbackErrors = function handleCallbackErrors(fn, arg1) {
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
      obj = _mod12874;
    })(fn(), arg1, fn);
  } catch (tmp5) {
    tmp3(tmp5);
    tmp2();
    throw tmp5;
  }
};
