// === Module 4137: ? ===

// Module 4137
import _typeof from "module_3725" /* 3725 */;
import module_4138 from "module_4138" /* 4138 */;
import module_3729 from "module_3729" /* 3729 */;
import requiredArgs from "requiredArgs" /* 3726 */;

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
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_4138) {
  obj = { default: module_4138 };
  let tmp5 = obj;
} else {
  tmp5 = module_4138;
}
module_4138 = tmp5;
if (!module_3729) {
  obj = { default: module_3729 };
  let tmp7 = obj;
} else {
  tmp7 = module_3729;
}
module_3729 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function set(arg0, year) {
  requiredArgs.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      const defaultResult1 = _typeof.default(arg0);
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
          defaultResult2 = module_4138.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(module_3729.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(module_3729.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(module_3729.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(module_3729.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(module_3729.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;