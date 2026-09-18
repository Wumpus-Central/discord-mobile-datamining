// _runtime/metro/04223__.js
import _typeof_mod from "03811__.js";
import module_4224_mod from "04224__.js";
import module_3815_mod from "03815__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

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
let module_4224 = module_4224_mod;
if (!module_4224) {
  const obj2 = { default: module_4224 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4224;
}
module_4224 = tmp5;
let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj3 = { default: module_3815 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3815;
}
module_3815 = tmp7;
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
          defaultResult2 = module_4224.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(module_3815.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(module_3815.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(module_3815.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(module_3815.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(module_3815.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;