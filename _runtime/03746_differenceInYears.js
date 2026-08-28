// === Module 3746: differenceInYears ===

// Module 3746 (differenceInYears)
import _typeof from "_typeof" /* 3541 */;
import differenceInCalendarYears from "differenceInCalendarYears" /* 3731 */;
import compareAsc from "compareAsc" /* 3717 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!differenceInCalendarYears) {
  obj = { default: null };
  obj[0] = differenceInCalendarYears;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarYears;
}
differenceInCalendarYears = tmp5;
if (!compareAsc) {
  obj = { default: null };
  obj[0] = compareAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function differenceInYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarYears.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(compareAsc.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;