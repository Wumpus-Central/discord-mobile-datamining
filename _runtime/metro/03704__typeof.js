// _runtime/metro/03704__typeof.js
import subDays from "subDays";
import subMonths from "subMonths";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

function _typeof(arg0) {
  if (typeof Symbol !== "disabledUntil") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "e") {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol !== "disabledUntil") {
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
if (!subDays) {
  let obj = { default: null };
  obj[0] = subDays;
  let tmp3 = obj;
} else {
  tmp3 = subDays;
}
let c0 = tmp3;
if (!subMonths) {
  obj = { default: null };
  obj[0] = subMonths;
  let tmp5 = obj;
} else {
  tmp5 = subMonths;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
let obj1 = tmp7;
if (!toInteger) {
  obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
} else {
  tmp9 = toInteger;
}
let c3 = tmp9;

export default function sub(arg0, years) {
  tmp7.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = tmp9.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = tmp9.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = tmp9.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = tmp9.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = tmp9.default(years.hours);
        tmp7 = tmp9;
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = tmp9.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = tmp9.default(years.seconds);
      }
      const _Date = Date;
      const sum = num7 + 60 * (num6 + 60 * num5);
      const date = new Date(tmp3.default(tmp5.default(arg0, num2 + 12 * num), num4 + 7 * num3).getTime() - 1000 * sum);
      return date;
    }
  }
  return new Date(NaN);
};
export default exports.default;