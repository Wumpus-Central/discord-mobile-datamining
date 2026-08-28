// === Module 3752: eachQuarterOfInterval ===

// Module 3752 (eachQuarterOfInterval)
import addQuarters from "addQuarters" /* 3707 */;
import startOfQuarter from "startOfQuarter" /* 3753 */;
import _typeof from "_typeof" /* 3541 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!addQuarters) {
  let obj = { default: null };
  obj[0] = addQuarters;
  let tmp3 = obj;
} else {
  tmp3 = addQuarters;
}
addQuarters = tmp3;
if (!startOfQuarter) {
  obj = { default: null };
  obj[0] = startOfQuarter;
  let tmp5 = obj;
} else {
  tmp5 = startOfQuarter;
}
startOfQuarter = tmp5;
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

export default function eachQuarterOfInterval(arg0) {
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
    let defaultResult3 = startOfQuarter.default(defaultResult1);
    const time1 = startOfQuarter.default(defaultResult2).getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let tmp10 = _typeof;
        let arr = items.push(_typeof.default(defaultResult3));
        let tmp12 = addQuarters;
        let defaultResult5 = addQuarters.default(defaultResult3, 1);
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