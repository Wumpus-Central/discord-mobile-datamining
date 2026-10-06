// === Module 4159: differenceInISOWeekYears ===

// Module 4159 (differenceInISOWeekYears)
import toDate_mod from "toDate" /* 3964 */;
import differenceInCalendarISOWeekYears_mod from "differenceInCalendarISOWeekYears" /* 4148 */;
import compareAsc_mod from "compareAsc" /* 4140 */;
import subISOWeekYears_mod from "subISOWeekYears" /* 4160 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let differenceInCalendarISOWeekYears = differenceInCalendarISOWeekYears_mod;
if (!differenceInCalendarISOWeekYears) {
  tmp5 = { default: differenceInCalendarISOWeekYears };
  const obj2 = { default: differenceInCalendarISOWeekYears };
} else {
  tmp5 = differenceInCalendarISOWeekYears;
}
differenceInCalendarISOWeekYears = tmp5;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  tmp7 = { default: compareAsc };
  const obj3 = { default: compareAsc };
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
let subISOWeekYears = subISOWeekYears_mod;
if (!subISOWeekYears) {
  tmp9 = { default: subISOWeekYears };
  const obj4 = { default: subISOWeekYears };
} else {
  tmp9 = subISOWeekYears;
}
subISOWeekYears = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp11 = { default: requiredArgs };
  const obj5 = { default: requiredArgs };
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function differenceInISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarISOWeekYears.default(defaultResult1, defaultResult2));
  const result = defaultResult3 * (absolute - Number(compareAsc.default(subISOWeekYears.default(defaultResult1, defaultResult3 * absolute), defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};