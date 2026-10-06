// _runtime/04136_max.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
    }
    let tmp = arg0;
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function max(arg0) {
  let callResult;
  let defaultResult = requiredArgs.default(1, arguments);
  if (!arg0) {
    if ("object" === _typeof(arg0)) {
      if (null !== arg0) {
        const _Array = Array;
        callResult = slice.call(arg0);
      }
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(NaN);
    return date;
  } else {
    callResult = arg0;
  }
  const item = callResult.forEach((item) => {
    defaultResult = toDate.default(item);
    let isNaNResult = undefined === defaultResult || defaultResult < defaultResult;
    if (!isNaNResult) {
      const _isNaN = isNaN;
      const _Number = Number;
      isNaNResult = isNaN(Number(defaultResult));
    }
  });
  let date1 = toDate;
  if (!date1) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(NaN);
  }
  return date1;
}
