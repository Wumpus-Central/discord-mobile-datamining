// _runtime/03647_eachHourOfInterval.js
import addHours from "addHours";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!addHours) {
  let obj = { default: null };
  obj[0] = addHours;
  let tmp3 = obj;
} else {
  tmp3 = addHours;
}
let c0 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function eachHourOfInterval(arg0, step) {
  let time2;
  let obj = arg0;
  tmp7.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  let defaultResult1 = tmp5.default(obj.start);
  const time = defaultResult1.getTime();
  const time1 = tmp5.default(obj.end).getTime();
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
            let tmp15 = tmp5;
            let arr = items.push(tmp5.default(defaultResult1));
            let tmp17 = tmp3;
            let defaultResult3 = tmp3.default(defaultResult1, NumberResult);
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
  const defaultResult2 = tmp5.default(obj.end);
};
export default exports.default;