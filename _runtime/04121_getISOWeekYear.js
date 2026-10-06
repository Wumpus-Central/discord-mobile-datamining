// _runtime/04121_getISOWeekYear.js
import toDate_mod from "03964_toDate.js";
import startOfISOWeek_mod from "04122_startOfISOWeek.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  tmp5 = { default: startOfISOWeek };
  const obj2 = { default: startOfISOWeek };
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getISOWeekYear(arg0) {
  let sum;
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const date = new Date(0);
  date.setFullYear(fullYear + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  const date1 = new Date(0);
  date1.setFullYear(fullYear, 0, 4);
  date1.setHours(0, 0, 0, 0);
  const defaultResult3 = startOfISOWeek.default(date1);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    sum = fullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = fullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = fullYear - 1;
    }
  }
  return sum;
}
