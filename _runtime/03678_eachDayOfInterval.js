// === Module 3678: eachDayOfInterval ===

// Module 3678 (eachDayOfInterval)
import _typeof from "_typeof" /* 3472 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function eachDayOfInterval(arg0, step) {
  let time1;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const time = _typeof.default(obj.end).getTime();
  if (defaultResult1.getTime() <= time) {
    defaultResult1.setHours(0, 0, 0, 0);
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num5 = 1;
    if (null !== step) {
      num5 = 1;
      if (undefined !== step) {
        num5 = step;
      }
    }
    const NumberResult = Number(num5);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time) {
          do {
            let arr = items.push(_typeof.default(defaultResult1));
            let setDateResult = defaultResult1.setDate(defaultResult1.getDate() + NumberResult);
            let setHoursResult1 = defaultResult1.setHours(0, 0, 0, 0);
            time1 = defaultResult1.getTime();
          } while (time1 <= time);
        }
        return items;
      }
    }
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("`options.step` must be a number greater than 1");
    throw rangeError;
  } else {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("Invalid interval");
    throw rangeError1;
  }
  const defaultResult2 = _typeof.default(obj.end);
};
export default exports.default;