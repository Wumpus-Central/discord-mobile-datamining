// _runtime/metro/00878__.js

export const isHardCrash = function isHardCrash(str) {
  if (typeof str !== "string") {
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
