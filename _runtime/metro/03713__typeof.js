// _runtime/metro/03713__typeof.js
import _typeof from "03540__typeof.js";
import requiredArgs from "../03541_requiredArgs.js";

function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function min(arg0) {
  requiredArgs.default(1, arguments);
  if (!arg0) {
    if ("object" === _typeof(arg0)) {
      if (null !== arg0) {
        const _Array = Array;
        const call = slice.call;
        let arr = typeof call === "unknown" ? slice() : call(arg0);
      }
    }
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else {
    arr = arg0;
  }
  const item = arr.forEach((arg0) => {
    const defaultResult = closure_1_0.default(arg0);
    let isNaNResult = undefined === closure_0 || closure_0 > defaultResult;
    if (!isNaNResult) {
      const _isNaN = isNaN;
      isNaNResult = isNaN(defaultResult.getDate());
    }
    if (isNaNResult) {
      closure_0 = defaultResult;
    }
  });
  let date1 = _typeof;
  if (!_typeof) {
    const _Date2 = Date;
    date1 = new Date(NaN);
  }
  return date1;
};
export default exports.default;