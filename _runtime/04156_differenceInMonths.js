// _runtime/04156_differenceInMonths.js
import toDate_mod from "03958_toDate.js";
import differenceInCalendarMonths_mod from "04144_differenceInCalendarMonths.js";
import compareAsc_mod from "04134_compareAsc.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import isLastDayOfMonth_mod from "04157_isLastDayOfMonth.js";

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
let differenceInCalendarMonths = differenceInCalendarMonths_mod;
if (!differenceInCalendarMonths) {
  tmp5 = { default: differenceInCalendarMonths };
  const obj2 = { default: differenceInCalendarMonths };
} else {
  tmp5 = differenceInCalendarMonths;
}
differenceInCalendarMonths = tmp5;
let compareAsc = compareAsc_mod;
if (!compareAsc) {
  tmp7 = { default: compareAsc };
  const obj3 = { default: compareAsc };
} else {
  tmp7 = compareAsc;
}
compareAsc = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let isLastDayOfMonth = isLastDayOfMonth_mod;
if (!isLastDayOfMonth) {
  tmp11 = { default: isLastDayOfMonth };
  const obj5 = { default: isLastDayOfMonth };
} else {
  tmp11 = isLastDayOfMonth;
}
isLastDayOfMonth = tmp11;

export default function differenceInMonths(date, friendsSince) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(date);
  const defaultResult2 = toDate.default(friendsSince);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarMonths.default(defaultResult1, defaultResult2));
  let num = 0;
  if (absolute >= 1) {
    const tmp5 = 1 === defaultResult1.getMonth() && defaultResult1.getDate() > 27;
    if (tmp5) {
      defaultResult1.setDate(30);
    }
    defaultResult1.setMonth(defaultResult1.getMonth() - defaultResult3 * absolute);
    let flag = compareAsc.default(defaultResult1, defaultResult2) === -defaultResult3;
    const defaultResult4 = compareAsc.default(defaultResult1, defaultResult2);
    const tmp9 = -defaultResult3;
    const tmp11 =
      isLastDayOfMonth.default(toDate.default(date)) &&
      1 === absolute &&
      1 === compareAsc.default(date, defaultResult2);
    if (tmp11) {
      flag = false;
    }
    const _Number = Number;
    num = defaultResult3 * (absolute - Number(flag));
  }
  let num4 = 0;
  if (0 !== num) {
    num4 = num;
  }
  return num4;
}
