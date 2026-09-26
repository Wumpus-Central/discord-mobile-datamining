// === Module 4267: ? ===

// Module 4267
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4079 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfISOWeekYear.default(arg1).getTime();
};
export default exports.default;