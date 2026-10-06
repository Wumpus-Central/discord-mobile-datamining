// === Module 4200: getUTCISOWeek ===

// Module 4200 (getUTCISOWeek)
import toDate_mod from "toDate" /* 3964 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4201 */;
import startOfUTCISOWeekYear_mod from "startOfUTCISOWeekYear" /* 4202 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

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
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  tmp5 = { default: startOfUTCISOWeek };
  const obj2 = { default: startOfUTCISOWeek };
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let startOfUTCISOWeekYear = startOfUTCISOWeekYear_mod;
if (!startOfUTCISOWeekYear) {
  tmp7 = { default: startOfUTCISOWeekYear };
  const obj3 = { default: startOfUTCISOWeekYear };
} else {
  tmp7 = startOfUTCISOWeekYear;
}
startOfUTCISOWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getUTCISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = startOfUTCISOWeek.default(defaultResult1);
  const time = defaultResult2.getTime();
  const defaultResult3 = startOfUTCISOWeekYear.default(defaultResult1);
  return Math.round((time - defaultResult3.getTime()) / c4) + 1;
};