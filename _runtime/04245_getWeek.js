// === Module 4245: getWeek ===

// Module 4245 (getWeek)
import startOfWeek_mod from "startOfWeek" /* 4123 */;
import startOfWeekYear_mod from "startOfWeekYear" /* 4246 */;
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  tmp3 = { default: startOfWeek };
  const obj = { default: startOfWeek };
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let startOfWeekYear = startOfWeekYear_mod;
if (!startOfWeekYear) {
  tmp5 = { default: startOfWeekYear };
  const obj2 = { default: startOfWeekYear };
} else {
  tmp5 = startOfWeekYear;
}
startOfWeekYear = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = startOfWeek.default(defaultResult1, arg1);
  const time = defaultResult2.getTime();
  const defaultResult3 = startOfWeekYear.default(defaultResult1, arg1);
  return Math.round((time - defaultResult3.getTime()) / c4) + 1;
};