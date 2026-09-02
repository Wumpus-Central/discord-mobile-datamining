// === Module 3779: eachMinuteOfInterval ===

// Module 3779 (eachMinuteOfInterval)
import addMinutes from "addMinutes" /* 3736 */;
import _typeof from "_typeof" /* 3571 */;
import startOfMinute from "startOfMinute" /* 3780 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!addMinutes) {
  let obj = { default: null };
  obj[0] = addMinutes;
  let tmp3 = obj;
} else {
  tmp3 = addMinutes;
}
addMinutes = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!startOfMinute) {
  obj = { default: null };
  obj[0] = startOfMinute;
  let tmp7 = obj;
} else {
  tmp7 = startOfMinute;
}
startOfMinute = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachMinuteOfInterval(start, step) {
  let time2;
  requiredArgs.default(1, arguments);
  let defaultResult1 = startOfMinute.default(_typeof.default(start.start));
  const time = defaultResult1.getTime();
  const time1 = _typeof.default(start.end).getTime();
  if (time >= time1) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  } else {
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num = 1;
    if (null !== step) {
      num = 1;
      if (undefined !== step) {
        num = step;
      }
    }
    const NumberResult = Number(num);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time1) {
          do {
            let tmp6 = _typeof;
            let arr = items.push(_typeof.default(defaultResult1));
            let tmp8 = addMinutes;
            let defaultResult3 = addMinutes.default(defaultResult1, NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
        }
        return items;
      }
    }
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("`options.step` must be a number equal to or greater than 1");
    throw rangeError1;
  }
  const defaultResult2 = _typeof.default(start.end);
};
export default exports.default;