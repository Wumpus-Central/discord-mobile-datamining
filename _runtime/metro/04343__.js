// _runtime/metro/04343__.js
import subDays_mod from "../04282_subDays.js";
import subMonths_mod from "../04344_subMonths.js";
import requiredArgs_mod from "../03912_requiredArgs.js";
import module_3915_mod from "03915__.js";

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
let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj4 = { default: module_3915 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3915;
}
module_3915 = tmp9;

export default function sub(arg0, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = module_3915.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = module_3915.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = module_3915.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = module_3915.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = module_3915.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = module_3915.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = module_3915.default(years.seconds);
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