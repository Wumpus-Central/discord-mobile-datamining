// === Module 3736: differenceInISOWeekYears ===

// Module 3736 (differenceInISOWeekYears)
import _typeof from "_typeof" /* 3541 */;
import differenceInCalendarISOWeekYears from "differenceInCalendarISOWeekYears" /* 3725 */;
import compareAsc from "compareAsc" /* 3717 */;
import subISOWeekYears from "subISOWeekYears" /* 3737 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!differenceInCalendarISOWeekYears) {
  obj = { default: null };
  obj[0] = differenceInCalendarISOWeekYears;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarISOWeekYears;
}
differenceInCalendarISOWeekYears = tmp5;
if (!compareAsc) {
  obj = { default: null };
  obj[0] = compareAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
if (!subISOWeekYears) {
  const obj1 = { default: null };
  obj1[0] = subISOWeekYears;
  let tmp9 = obj1;
} else {
  tmp9 = subISOWeekYears;
}
subISOWeekYears = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function differenceInISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarISOWeekYears.default(defaultResult1, defaultResult2));
  const result = defaultResult3 * (absolute - Number(compareAsc.default(subISOWeekYears.default(defaultResult1, defaultResult3 * absolute), defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;