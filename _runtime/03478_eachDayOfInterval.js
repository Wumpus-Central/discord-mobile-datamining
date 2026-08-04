// _runtime/03478_eachDayOfInterval.js
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function eachDayOfInterval(arg0, step) {
  let time1;
  let obj = arg0;
  tmp5.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = tmp3.default(obj.start);
  const time = tmp3.default(obj.end).getTime();
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
            let tmp15 = tmp3;
            let arr = items.push(tmp3.default(defaultResult1));
            let setDateResult = defaultResult1.setDate(defaultResult1.getDate() + NumberResult);
            let tmp18 = defaultResult1;
            let num6 = 0;
            let num7 = 0;
            let num8 = 0;
            let num9 = 0;
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
  const defaultResult2 = tmp3.default(obj.end);
};
export default exports.default;