// _runtime/04396_sub.js
import subDays_mod from "04335_subDays.js";
import subMonths_mod from "04397_subMonths.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import toInteger_mod from "03968_toInteger.js";

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
let subDays = subDays_mod;
if (!subDays) {
  tmp3 = { default: subDays };
  const obj = { default: subDays };
} else {
  tmp3 = subDays;
}
subDays = tmp3;
let subMonths = subMonths_mod;
if (!subMonths) {
  tmp5 = { default: subMonths };
  const obj2 = { default: subMonths };
} else {
  tmp5 = subMonths;
}
subMonths = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp9 = { default: toInteger };
  const obj4 = { default: toInteger };
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;

export default function sub(arg0, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = toInteger.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = toInteger.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = toInteger.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = toInteger.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = toInteger.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = toInteger.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = toInteger.default(years.seconds);
      }
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const self = this;
      const self2 = this;
      const defaultResult1 = subDays.default(subMonths.default(arg0, num2 + 12 * num), num4 + 7 * num3);
      const date = new Date(defaultResult1.getTime() - 1000 * sum);
      return date;
    }
  }
  const date1 = new Date(NaN);
  return date1;
}
