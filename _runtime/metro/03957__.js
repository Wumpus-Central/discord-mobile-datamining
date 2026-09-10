// === Module 3957: ? ===

// Module 3957
import _typeof from "module_3693" /* 3693 */;
import startOfYear from "startOfYear" /* 3912 */;
import differenceInCalendarDays from "differenceInCalendarDays" /* 3855 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfYear) {
  obj = { default: startOfYear };
  let tmp5 = obj;
} else {
  tmp5 = startOfYear;
}
startOfYear = tmp5;
if (!differenceInCalendarDays) {
  obj = { default: differenceInCalendarDays };
  let tmp7 = obj;
} else {
  tmp7 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getDayOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return differenceInCalendarDays.default(defaultResult1, startOfYear.default(defaultResult1)) + 1;
};
export default exports.default;