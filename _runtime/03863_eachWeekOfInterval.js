// === Module 3863: eachWeekOfInterval ===

// Module 3863 (eachWeekOfInterval)
import module_3818 from "module_3818" /* 3818 */;
import startOfWeek from "startOfWeek" /* 3809 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3818) {
  let obj = { default: module_3818 };
  let tmp3 = obj;
} else {
  tmp3 = module_3818;
}
module_3818 = tmp3;
if (!startOfWeek) {
  obj = { default: startOfWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
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
        let arr = items.push(_typeof.default(defaultResult3));
        let defaultResult5 = module_3818.default(defaultResult3, 1);
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