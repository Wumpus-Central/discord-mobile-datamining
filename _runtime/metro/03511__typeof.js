// _runtime/metro/03511__typeof.js
import addDays from "addDays";
import addMonths from "addMonths";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      function _typeof(arg0) {
        return typeof arg0;
      }
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
if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
let c0 = tmp3;
if (!addMonths) {
  obj = { default: null };
  obj[0] = addMonths;
  let tmp5 = obj;
} else {
  tmp5 = addMonths;
}
let closure_1 = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;
if (!toInteger) {
  const obj2 = { default: null };
  obj2[0] = toInteger;
  let tmp11 = obj2;
} else {
  tmp11 = toInteger;
}
let c4 = tmp11;

export default function add(arg0, years) {
  tmp9.default(2, arguments);
  if (years) {
    if ("object" === _typeof(years)) {
      let num = 0;
      if (years.years) {
        num = tmp11.default(years.years);
      }
      let num2 = 0;
      if (years.months) {
        num2 = tmp11.default(years.months);
      }
      let num3 = 0;
      if (years.weeks) {
        num3 = tmp11.default(years.weeks);
      }
      let num4 = 0;
      if (years.days) {
        num4 = tmp11.default(years.days);
      }
      let num5 = 0;
      if (years.hours) {
        num5 = tmp11.default(years.hours);
      }
      let num6 = 0;
      if (years.minutes) {
        num6 = tmp11.default(years.minutes);
      }
      let num7 = 0;
      if (years.seconds) {
        num7 = tmp11.default(years.seconds);
        tmp9 = tmp11;
      }
      const defaultResult1 = tmp7.default(arg0);
      if (num2) {
        let defaultResult2 = tmp5.default(defaultResult1, num2 + 12 * num);
      } else {
        defaultResult2 = defaultResult1;
      }
      if (num4) {
        let defaultResult3 = tmp3.default(defaultResult2, num4 + 7 * num3);
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