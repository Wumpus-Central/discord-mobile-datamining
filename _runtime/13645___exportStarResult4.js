// === Module 13645: __exportStarResult4 ===

// Module 13645 (__exportStarResult4)
const require = arg1;
const dependencyMap = arg6;
arg5.GetOption = function GetOption(obj, arg1, arg2, arr) {
  if (typeof obj !== "object") {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    let str = tmp27;
    if (undefined !== obj[arg1]) {
      str = "boolean";
      if ("boolean" !== arg2) {
        if ("string" !== arg2) {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("invalid type");
          throw typeError1;
        }
      }
      let tmp3 = tmp27;
      if ("boolean" === arg2) {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(tmp27);
        str = BooleanResult;
        tmp3 = BooleanResult;
      }
      let tmp6 = tmp3;
      if ("string" === arg2) {
        str = str(13638).ToString(tmp3);
        tmp6 = str;
      }
      if (undefined !== arr) {
        if (!arr.filter((arg0) => arg0 == str).length) {
          const _RangeError = RangeError;
          const concat = "".concat;
          const combined = "".concat(tmp6, " is not within ");
          const rangeError = new RangeError(combined.concat(arr.join(", ")));
          throw rangeError;
        }
      }
      return tmp6;
    } else {
      return arg4;
    }
  }
};