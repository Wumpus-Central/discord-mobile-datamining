// === Module 3467: differenceInISOWeekYears ===

// Module 3467 (differenceInISOWeekYears)
import _typeof from "_typeof";
import differenceInCalendarISOWeekYears from "differenceInCalendarISOWeekYears";
import compareAsc from "compareAsc";
import subISOWeekYears from "subISOWeekYears";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!differenceInCalendarISOWeekYears) {
  obj = { default: null };
  obj[0] = differenceInCalendarISOWeekYears;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarISOWeekYears;
}
let closure_1 = tmp5;
if (!compareAsc) {
  obj = { default: null };
  obj[0] = compareAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
}
let obj1 = tmp7;
if (!subISOWeekYears) {
  obj1 = { default: null };
  obj1[0] = subISOWeekYears;
  let tmp9 = obj1;
} else {
  tmp9 = subISOWeekYears;
}
let c3 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
let c4 = tmp11;

export default function differenceInISOWeekYears(arg0, arg1) {
  tmp11.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const defaultResult2 = tmp3.default(arg1);
  const defaultResult3 = tmp7.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(tmp5.default(defaultResult1, defaultResult2));
  const result = defaultResult3 * (absolute - Number(tmp7.default(tmp9.default(defaultResult1, defaultResult3 * absolute), defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;