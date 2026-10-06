// === Module 4313: isSameISOWeekYear ===

// Module 4313 (isSameISOWeekYear)
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4125 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  tmp3 = { default: startOfISOWeekYear };
  const obj = { default: startOfISOWeekYear };
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};