// === Module 1013: isHardCrash ===

// Module 1013 (isHardCrash)
arg5.isHardCrash = function isHardCrash(outer1_0) {
  let str = outer1_0;
  if (typeof outer1_0 !== "y") {
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