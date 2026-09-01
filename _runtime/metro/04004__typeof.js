// _runtime/metro/04004__typeof.js
import subDays from "../03943_subDays.js";
import subMonths from "../04005_subMonths.js";
import requiredArgs from "../03573_requiredArgs.js";
import toInteger from "../03576_toInteger.js";

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
if (!subDays) {
  let obj = { default: null };
  obj[0] = subDays;
  let tmp3 = obj;
} else {
  tmp3 = subDays;
}
subDays = tmp3;
if (!subMonths) {
  obj = { default: null };
  obj[0] = subMonths;
  let tmp5 = obj;
} else {
  tmp5 = subMonths;
}
subMonths = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
if (!toInteger) {
  const obj1 = { default: null };
  obj1[0] = toInteger;
  let tmp9 = obj1;
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
      const date = new Date(subDays.default(subMonths.default(arg0, num2 + 12 * num), num4 + 7 * num3).getTime() - 1000 * sum);
      return date;
    }
  }
  return new Date(NaN);
};
export default exports.default;