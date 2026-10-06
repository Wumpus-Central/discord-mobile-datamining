// === Module 4372: roundToNearestMinutes ===

// Module 4372 (roundToNearestMinutes)
import _mod4158 from "module_4158" /* 4158 */;
import toDate_mod from "toDate" /* 3964 */;
import toInteger_mod from "toInteger" /* 3968 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp5 = { default: toInteger };
  const obj2 = { default: toInteger };
} else {
  tmp5 = toInteger;
}
toInteger = tmp5;

export default function roundToNearestMinutes(arg0, nearestTo) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("1 argument required, but only none provided present");
    throw typeError;
  } else {
    nearestTo = undefined;
    const _default = toInteger.default;
    if (null != nearestTo) {
      nearestTo = nearestTo.nearestTo;
    }
    let num = 1;
    if (null !== nearestTo) {
      num = 1;
      if (undefined !== nearestTo) {
        num = nearestTo;
      }
    }
    const _defaultResult = _default(num);
    if (_defaultResult >= 1) {
      if (_defaultResult <= 30) {
        const defaultResult = toDate.default(arg0);
        const seconds = defaultResult.getSeconds();
        const sum = defaultResult.getMinutes() + seconds / 60;
        let roundingMethod;
        const getRoundingMethod = _mod4158.getRoundingMethod;
        if (null != nearestTo) {
          roundingMethod = nearestTo.roundingMethod;
        }
        const _Math = Math;
        const result = getRoundingMethod(roundingMethod)(sum / _defaultResult) * _defaultResult;
        const _Date = Date;
        const result1 = Math.round(sum % _defaultResult / _defaultResult) * _defaultResult;
        const fullYear = defaultResult.getFullYear();
        const month = defaultResult.getMonth();
        const self = this;
        const self2 = this;
        const date = defaultResult.getDate();
        const date1 = new Date(fullYear, month, date, defaultResult.getHours(), result + result1);
        return date1;
      }
    }
    const _RangeError = RangeError;
    const self3 = this;
    const self4 = this;
    const rangeError = new RangeError("`options.nearestTo` must be between 1 and 30");
    throw rangeError;
  }
};