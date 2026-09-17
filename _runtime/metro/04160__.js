// === Module 4160: ? ===

// Module 4160
import subDays_mod from "subDays" /* 4099 */;
import subMonths_mod from "subMonths" /* 4161 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;
import module_3732_mod from "module_3732" /* 3732 */;

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
let subDays = subDays_mod;
if (!subDays) {
  const obj = { default: subDays };
  let tmp3 = obj;
} else {
  tmp3 = subDays;
}
subDays = tmp3;
let subMonths = subMonths_mod;
if (!subMonths) {
  const obj2 = { default: subMonths };
  let tmp5 = obj2;
} else {
  tmp5 = subMonths;
}
subMonths = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj4 = { default: module_3732 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3732;
}
module_3732 = tmp9;

export default function sub(arg0, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = module_3732.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = module_3732.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = module_3732.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = module_3732.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = module_3732.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = module_3732.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = module_3732.default(years.seconds);
      }
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const date = new Date(subDays.default(subMonths.default(arg0, num2 + 12 * num), num4 + 7 * num3).getTime() - 1000 * sum);
      return date;
    }
  }
  return new Date(NaN);
};
export default exports.default;