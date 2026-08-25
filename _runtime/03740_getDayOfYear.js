// === Module 3740: getDayOfYear ===

// Module 3740 (getDayOfYear)
import _typeof from "_typeof" /* 3476 */;
import startOfYear from "startOfYear" /* 3695 */;
import differenceInCalendarDays from "differenceInCalendarDays" /* 3638 */;
import requiredArgs from "requiredArgs" /* 3477 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!startOfYear) {
  obj = { default: null };
  obj[0] = startOfYear;
  let tmp5 = obj;
} else {
  tmp5 = startOfYear;
}
startOfYear = tmp5;
if (!differenceInCalendarDays) {
  obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp7 = obj;
} else {
  tmp7 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
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