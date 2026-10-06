// === Module 4221: formatISODuration ===

// Module 4221 (formatISODuration)
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function formatISODuration(years) {
  requiredArgs.default(1, arguments);
  if ("object" !== _typeof(years)) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Duration must be an object");
    throw error;
  } else {
    years = years.years;
    let num = 0;
    if (undefined !== years) {
      num = years;
    }
    const months = years.months;
    let num2 = 0;
    if (undefined !== months) {
      num2 = months;
    }
    const days = years.days;
    let num3 = 0;
    if (undefined !== days) {
      num3 = days;
    }
    const hours = years.hours;
    let num4 = 0;
    if (undefined !== hours) {
      num4 = hours;
    }
    const minutes = years.minutes;
    let num5 = 0;
    if (undefined !== minutes) {
      num5 = minutes;
    }
    const seconds = years.seconds;
    let num6 = 0;
    if (undefined !== seconds) {
      num6 = seconds;
    }
    const concat = "P".concat;
    const combined = "P".concat(num, "Y");
    const combined1 = combined.concat(num2, "M");
    const combined2 = combined1.concat(num3, "DT");
    const combined3 = combined2.concat(num4, "H");
    const combined4 = combined3.concat(num5, "M");
    return combined4.concat(num6, "S");
  }
};