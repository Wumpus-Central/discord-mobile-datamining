// === Module 4105: ? ===

// Module 4105
import module_4106_mod from "module_4106" /* 4106 */;
import module_4107_mod from "module_4107" /* 4107 */;
import _typeof_mod from "module_3958" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;
import module_3962_mod from "module_3962" /* 3962 */;

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
let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj = { default: module_4106 };
  let tmp3 = obj;
} else {
  tmp3 = module_4106;
}
module_4106 = tmp3;
let module_4107 = module_4107_mod;
if (!module_4107) {
  const obj2 = { default: module_4107 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4107;
}
module_4107 = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj5 = { default: module_3962 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3962;
}
module_3962 = tmp11;

export default function add(arg0, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = module_3962.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = module_3962.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = module_3962.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = module_3962.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = module_3962.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = module_3962.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = module_3962.default(years.seconds);
      }
      const defaultResult1 = _typeof.default(arg0);
      if (num2) {
        let defaultResult2 = module_4107.default(defaultResult1, num2 + 12 * num);
      } else {
        defaultResult2 = defaultResult1;
      }
      if (num4) {
        let defaultResult3 = module_4106.default(defaultResult2, num4 + 7 * num3);
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