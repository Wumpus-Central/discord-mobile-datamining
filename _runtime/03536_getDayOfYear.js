// === Module 3536: getDayOfYear ===

// Module 3536 (getDayOfYear)
import _typeof from "_typeof";
import startOfYear from "startOfYear";
import differenceInCalendarDays from "differenceInCalendarDays";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!startOfYear) {
  obj = { default: null };
  obj[0] = startOfYear;
  let tmp5 = obj;
} else {
  tmp5 = startOfYear;
}
let closure_1 = tmp5;
if (!differenceInCalendarDays) {
  obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp7 = obj;
} else {
  tmp7 = differenceInCalendarDays;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function getDayOfYear(arg0) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  return tmp7.default(defaultResult1, tmp5.default(defaultResult1)) + 1;
};
export default exports.default;