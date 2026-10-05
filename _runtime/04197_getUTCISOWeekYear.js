// === Module 4197: getUTCISOWeekYear ===

// Module 4197 (getUTCISOWeekYear)
import toDate_mod from "toDate" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4195 */;

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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  tmp7 = { default: startOfUTCISOWeek };
  const obj3 = { default: startOfUTCISOWeek };
} else {
  tmp7 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp7;

export default function getUTCISOWeekYear(arg0) {
  let sum;
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const uTCFullYear = defaultResult1.getUTCFullYear();
  const date = new Date(0);
  date.setUTCFullYear(uTCFullYear + 1, 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  const defaultResult2 = startOfUTCISOWeek.default(date);
  const date1 = new Date(0);
  date1.setUTCFullYear(uTCFullYear, 0, 4);
  date1.setUTCHours(0, 0, 0, 0);
  const defaultResult3 = startOfUTCISOWeek.default(date1);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    sum = uTCFullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = uTCFullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = uTCFullYear - 1;
    }
  }
  return sum;
};