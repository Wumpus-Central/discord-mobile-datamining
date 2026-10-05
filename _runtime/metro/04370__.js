// _runtime/metro/04370__.js
import toDate_mod from "../03958_toDate.js";
import setMonth_mod from "../04371_setMonth.js";
import toInteger_mod from "../03962_toInteger.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
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
let setMonth = setMonth_mod;
if (!setMonth) {
  tmp5 = { default: setMonth };
  const obj2 = { default: setMonth };
} else {
  tmp5 = setMonth;
}
setMonth = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function set(arg0, year) {
  requiredArgs.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      const defaultResult1 = toDate.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult1.getTime())) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(NaN);
        return date;
      } else {
        if (null != year.year) {
          defaultResult1.setFullYear(year.year);
        }
        let defaultResult2 = defaultResult1;
        if (null != year.month) {
          defaultResult2 = setMonth.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(toInteger.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(toInteger.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(toInteger.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(toInteger.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(toInteger.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
}
