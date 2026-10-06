// === Module 4170: eachDayOfInterval ===

// Module 4170 (eachDayOfInterval)
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  let obj = { default: toDate };
  tmp3 = obj;
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
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
  const defaultResult1 = toDate.default(obj.start);
  const defaultResult2 = toDate.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    defaultResult1.setHours(0, 0, 0, 0);
    step = undefined;
    const _Number = Number;
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
    const _NumberResult = _Number(num5);
    if (_NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(_NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time) {
          do {
            let arr = items.push(toDate.default(defaultResult1));
            let setDateResult = defaultResult1.setDate(defaultResult1.getDate() + _NumberResult);
            let setHoursResult1 = defaultResult1.setHours(0, 0, 0, 0);
            time1 = defaultResult1.getTime();
          } while (time1 <= time);
        }
        return items;
      }
    }
    const _RangeError2 = RangeError;
    const self3 = this;
    const self4 = this;
    const rangeError = new RangeError("`options.step` must be a number greater than 1");
    throw rangeError;
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError1 = new RangeError("Invalid interval");
    throw rangeError1;
  }
};