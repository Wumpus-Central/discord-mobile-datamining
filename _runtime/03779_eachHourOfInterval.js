// === Module 3779: eachHourOfInterval ===

// Module 3779 (eachHourOfInterval)
import addHours from "addHours" /* 3726 */;
import _typeof from "_typeof" /* 3572 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!addHours) {
  let obj = { default: null };
  obj[0] = addHours;
  let tmp3 = obj;
} else {
  tmp3 = addHours;
}
addHours = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function eachHourOfInterval(arg0, step) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  let defaultResult1 = _typeof.default(obj.start);
  const time = defaultResult1.getTime();
  const time1 = _typeof.default(obj.end).getTime();
  if (time <= time1) {
    defaultResult1.setMinutes(0, 0, 0);
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num2 = 1;
    if (null !== step) {
      num2 = 1;
      if (undefined !== step) {
        num2 = step;
      }
    }
    const NumberResult = Number(num2);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time1) {
          do {
            let tmp15 = _typeof;
            let arr = items.push(_typeof.default(defaultResult1));
            let tmp17 = addHours;
            let defaultResult3 = addHours.default(defaultResult1, NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
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