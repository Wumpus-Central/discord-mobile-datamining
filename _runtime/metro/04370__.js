// === Module 4370: ? ===

// Module 4370
import _typeof_mod from "module_3958" /* 3958 */;
import module_4371_mod from "module_4371" /* 4371 */;
import module_3962_mod from "module_3962" /* 3962 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

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
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4371 = module_4371_mod;
if (!module_4371) {
  const obj2 = { default: module_4371 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4371;
}
module_4371 = tmp5;
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj3 = { default: module_3962 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3962;
}
module_3962 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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
          defaultResult2 = module_4371.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(module_3962.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(module_3962.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(module_3962.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(module_3962.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(module_3962.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;