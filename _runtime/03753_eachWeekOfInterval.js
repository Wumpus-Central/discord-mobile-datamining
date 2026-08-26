// === Module 3753: eachWeekOfInterval ===

// Module 3753 (eachWeekOfInterval)
import addWeeks from "addWeeks" /* 3708 */;
import startOfWeek from "startOfWeek" /* 3699 */;
import _typeof from "_typeof" /* 3540 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!addWeeks) {
  let obj = { default: null };
  obj[0] = addWeeks;
  let tmp3 = obj;
} else {
  tmp3 = addWeeks;
}
addWeeks = tmp3;
if (!startOfWeek) {
  obj = { default: null };
  obj[0] = startOfWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekOfInterval(arg0, arg1) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const defaultResult2 = _typeof.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfWeek.default(defaultResult1, arg1);
    const defaultResult4 = startOfWeek.default(defaultResult2, arg1);
    defaultResult3.setHours(15);
    defaultResult4.setHours(15);
    const time1 = defaultResult4.getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let setHoursResult2 = defaultResult3.setHours(0);
        let tmp14 = _typeof;
        let arr = items.push(_typeof.default(defaultResult3));
        let tmp16 = addWeeks;
        let defaultResult5 = addWeeks.default(defaultResult3, 1);
        let setHoursResult3 = defaultResult5.setHours(15);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};
export default exports.default;