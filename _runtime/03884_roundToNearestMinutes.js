// === Module 3884: roundToNearestMinutes ===

// Module 3884 (roundToNearestMinutes)
import getRoundingMethod from "getRoundingMethod" /* 3670 */;
import _typeof from "_typeof" /* 3476 */;
import toInteger from "toInteger" /* 3480 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp5 = obj;
} else {
  tmp5 = toInteger;
}
toInteger = tmp5;

export default function roundToNearestMinutes(arg0, nearestTo) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const typeError = new TypeError("1 argument required, but only none provided present");
    throw typeError;
  } else {
    nearestTo = undefined;
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
    const defaultResult = toInteger.default(num);
    if (defaultResult >= 1) {
      if (defaultResult <= 30) {
        const defaultResult1 = _typeof.default(arg0);
        const seconds = defaultResult1.getSeconds();
        const sum = defaultResult1.getMinutes() + seconds / 60;
        let roundingMethod;
        if (null != nearestTo) {
          roundingMethod = nearestTo.roundingMethod;
        }
        const _Math = Math;
        const result = getRoundingMethod.getRoundingMethod(roundingMethod)(sum / defaultResult) * defaultResult;
        const _Date = Date;
        const result1 = Math.round(sum % defaultResult / defaultResult) * defaultResult;
        const fullYear = defaultResult1.getFullYear();
        const month = defaultResult1.getMonth();
        const date1 = new Date(fullYear, month, defaultResult1.getDate(), defaultResult1.getHours(), result + result1);
        return date1;
      }
    }
    const _RangeError = RangeError;
    const rangeError = new RangeError("`options.nearestTo` must be between 1 and 30");
    throw rangeError;
  }
};
export default exports.default;