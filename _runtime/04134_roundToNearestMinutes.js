// === Module 4134: roundToNearestMinutes ===

// Module 4134 (roundToNearestMinutes)
import _mod3920 from "module_3920" /* 3920 */;
import _typeof_mod from "module_3726" /* 3726 */;
import module_3730_mod from "module_3730" /* 3730 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj2 = { default: module_3730 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3730;
}
module_3730 = tmp5;

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
    const defaultResult = module_3730.default(num);
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
        const result = _mod3920.getRoundingMethod(roundingMethod)(sum / defaultResult) * defaultResult;
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