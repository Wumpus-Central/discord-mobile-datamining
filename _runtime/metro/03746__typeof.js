// === Module 3746: _typeof ===

// Module 3746 (_typeof)
import _typeof from "_typeof";
import setMonth from "setMonth";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";

function _typeof(arg0) {
  if (typeof Symbol !== "HAS_APPLICATION") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "e") {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol !== "HAS_APPLICATION") {
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
let c0 = tmp3;
if (!setMonth) {
  obj = { default: null };
  obj[0] = setMonth;
  let tmp5 = obj;
} else {
  tmp5 = setMonth;
}
let closure_1 = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function set(arg0, year) {
  tmp9.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      const defaultResult1 = tmp3.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult1.getTime())) {
        const _Date = Date;
        const date = new Date(NaN);
        return date;
      } else {
        if (null != year.year) {
          defaultResult1.setFullYear(year.year);
        }
        let defaultResult2 = defaultResult1;
        if (null != year.month) {
          defaultResult2 = tmp5.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(tmp7.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(tmp7.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(tmp7.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(tmp7.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(tmp7.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;