// _runtime/metro/03842__.js
import 03843__ from "03843__.js";
import 03844__ from "03844__.js";
import _typeof from "03695__.js";
import requiredArgs from "../03696_requiredArgs.js";
import 03699__ from "03699__.js";

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
if (!module_3843) {
  let obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
if (!module_3844) {
  obj = { default: module_3844 };
  let tmp5 = obj;
} else {
  tmp5 = module_3844;
}
module_3844 = tmp5;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
if (!module_3699) {
  const obj2 = { default: module_3699 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3699;
}
module_3699 = tmp11;

export default function add(arg0, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = module_3699.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = module_3699.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = module_3699.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = module_3699.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = module_3699.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = module_3699.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = module_3699.default(years.seconds);
      }
      const defaultResult1 = _typeof.default(arg0);
      if (num2) {
        let defaultResult2 = module_3844.default(defaultResult1, num2 + 12 * num);
      } else {
        defaultResult2 = defaultResult1;
      }
      if (num4) {
        let defaultResult3 = module_3843.default(defaultResult2, num4 + 7 * num3);
      } else {
        defaultResult3 = defaultResult2;
      }
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const date = new Date(defaultResult3.getTime() + 1000 * sum);
      return date;
    }
  }
  return new Date(NaN);
};
export default exports.default;