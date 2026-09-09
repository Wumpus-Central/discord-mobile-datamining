// === Module 3858: differenceInISOWeekYears ===

// Module 3858 (differenceInISOWeekYears)
import _typeof from "module_3663" /* 3663 */;
import differenceInCalendarISOWeekYears from "differenceInCalendarISOWeekYears" /* 3847 */;
import compareAsc from "compareAsc" /* 3839 */;
import subISOWeekYears from "subISOWeekYears" /* 3859 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!differenceInCalendarISOWeekYears) {
  obj = { default: differenceInCalendarISOWeekYears };
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarISOWeekYears;
}
differenceInCalendarISOWeekYears = tmp5;
if (!compareAsc) {
  obj = { default: compareAsc };
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
if (!subISOWeekYears) {
  const obj1 = { default: subISOWeekYears };
  let tmp9 = obj1;
} else {
  tmp9 = subISOWeekYears;
}
subISOWeekYears = tmp9;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
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