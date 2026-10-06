// _runtime/04169_differenceInYears.js
import toDate_mod from "03964_toDate.js";
import differenceInCalendarYears_mod from "04154_differenceInCalendarYears.js";
import compareAsc_mod from "04140_compareAsc.js";
import requiredArgs_mod from "03965_requiredArgs.js";

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
let differenceInCalendarYears = differenceInCalendarYears_mod;
if (!differenceInCalendarYears) {
  tmp5 = { default: differenceInCalendarYears };
  const obj2 = { default: differenceInCalendarYears };
} else {
  tmp5 = differenceInCalendarYears;
}
differenceInCalendarYears = tmp5;
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

export default function differenceInYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarYears.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result =
    defaultResult3 * (absolute - Number(compareAsc.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
}
