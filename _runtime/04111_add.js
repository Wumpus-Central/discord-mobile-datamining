// === Module 4111: add ===

// Module 4111 (add)
import addDays_mod from "addDays" /* 4112 */;
import addMonths_mod from "addMonths" /* 4113 */;
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import toInteger_mod from "toInteger" /* 3968 */;

let tmp11;
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
let addDays = addDays_mod;
if (!addDays) {
  tmp3 = { default: addDays };
  const obj = { default: addDays };
} else {
  tmp3 = addDays;
}
addDays = tmp3;
let addMonths = addMonths_mod;
if (!addMonths) {
  tmp5 = { default: addMonths };
  const obj2 = { default: addMonths };
} else {
  tmp5 = addMonths;
}
addMonths = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp11 = { default: toInteger };
  const obj5 = { default: toInteger };
} else {
  tmp11 = toInteger;
}
toInteger = tmp11;

export default function add(arg0, years) {
  requiredArgs.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let defaultResult2;
      let defaultResult3;
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
      const defaultResult1 = toDate.default(arg0);
      if (num2) {
        defaultResult2 = addMonths.default(defaultResult1, num2 + 12 * num);
      } else {
        defaultResult2 = defaultResult1;
      }
      if (num4) {
        defaultResult3 = addDays.default(defaultResult2, num4 + 7 * num3);
      } else {
        defaultResult3 = defaultResult2;
      }
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const self = this;
      const self2 = this;
      const date = new Date(defaultResult3.getTime() + 1000 * sum);
      return date;
    }
  }
  const date1 = new Date(NaN);
  return date1;
};