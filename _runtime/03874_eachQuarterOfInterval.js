// === Module 3874: eachQuarterOfInterval ===

// Module 3874 (eachQuarterOfInterval)
import module_3829 from "module_3829" /* 3829 */;
import startOfQuarter from "startOfQuarter" /* 3875 */;
import _typeof from "module_3663" /* 3663 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3829) {
  let obj = { default: module_3829 };
  let tmp3 = obj;
} else {
  tmp3 = module_3829;
}
module_3829 = tmp3;
if (!startOfQuarter) {
  obj = { default: startOfQuarter };
  let tmp5 = obj;
} else {
  tmp5 = startOfQuarter;
}
startOfQuarter = tmp5;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
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
        let arr = items.push(_typeof.default(defaultResult3));
        let defaultResult5 = module_3829.default(defaultResult3, 1);
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