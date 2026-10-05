// === Module 4165: eachHourOfInterval ===

// Module 4165 (eachHourOfInterval)
import addHours_mod from "addHours" /* 4112 */;
import toDate_mod from "toDate" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let addHours = addHours_mod;
if (!addHours) {
  let obj = { default: addHours };
  tmp3 = obj;
} else {
  tmp3 = addHours;
}
addHours = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
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
  let defaultResult1 = toDate.default(obj.start);
  const defaultResult2 = toDate.default(obj.end);
  const time = defaultResult1.getTime();
  const time1 = defaultResult2.getTime();
  if (time <= time1) {
    defaultResult1.setMinutes(0, 0, 0);
    step = undefined;
    const _Number = Number;
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
    const _NumberResult = _Number(num2);
    if (_NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(_NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time1) {
          do {
            let arr = items.push(toDate.default(defaultResult1));
            let defaultResult3 = addHours.default(defaultResult1, _NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
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