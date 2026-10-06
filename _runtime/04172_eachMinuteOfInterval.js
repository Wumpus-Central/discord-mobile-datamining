// === Module 4172: eachMinuteOfInterval ===

// Module 4172 (eachMinuteOfInterval)
import addMinutes_mod from "addMinutes" /* 4129 */;
import toDate_mod from "toDate" /* 3964 */;
import startOfMinute_mod from "startOfMinute" /* 4173 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let addMinutes = addMinutes_mod;
if (!addMinutes) {
  tmp3 = { default: addMinutes };
  const obj = { default: addMinutes };
} else {
  tmp3 = addMinutes;
}
addMinutes = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let startOfMinute = startOfMinute_mod;
if (!startOfMinute) {
  tmp7 = { default: startOfMinute };
  const obj3 = { default: startOfMinute };
} else {
  tmp7 = startOfMinute;
}
startOfMinute = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachMinuteOfInterval(start, step) {
  let time2;
  requiredArgs.default(1, arguments);
  let defaultResult1 = startOfMinute.default(toDate.default(start.start));
  const defaultResult2 = toDate.default(start.end);
  const time = defaultResult1.getTime();
  const time1 = defaultResult2.getTime();
  if (time >= time1) {
    const _RangeError2 = RangeError;
    const self3 = this;
    const self4 = this;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  } else {
    step = undefined;
    const _Number = Number;
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
    const _NumberResult = _Number(num);
    if (_NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(_NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time1) {
          do {
            let arr = items.push(toDate.default(defaultResult1));
            let defaultResult3 = addMinutes.default(defaultResult1, _NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
        }
        return items;
      }
    }
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError1 = new RangeError("`options.step` must be a number equal to or greater than 1");
    throw rangeError1;
  }
};