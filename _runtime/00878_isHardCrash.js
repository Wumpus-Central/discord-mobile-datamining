// _runtime/00878_isHardCrash.js
arg5.isHardCrash = function isHardCrash(closure_1_0) {
  let str = closure_1_0;
  if (typeof closure_1_0 !== "string") {
    if ("exception" in str) {
      const exception = str.exception;
      let values;
      if (null !== exception) {
        if (undefined !== exception) {
          values = exception.values;
        }
      }
      values[Symbol.iterator]();
      str = "onerror";
    }
    values = str.exception.values;
  }
  values = [];
};
