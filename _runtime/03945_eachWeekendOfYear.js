// === Module 3945: eachWeekendOfYear ===

// Module 3945 (eachWeekendOfYear)
import eachWeekendOfInterval_mod from "eachWeekendOfInterval" /* 3942 */;
import endOfYear_mod from "endOfYear" /* 3946 */;
import startOfYear_mod from "startOfYear" /* 3947 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let eachWeekendOfInterval = eachWeekendOfInterval_mod;
if (!eachWeekendOfInterval) {
  const obj = { default: eachWeekendOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
let endOfYear = endOfYear_mod;
if (!endOfYear) {
  const obj2 = { default: endOfYear };
  let tmp5 = obj2;
} else {
  tmp5 = endOfYear;
}
endOfYear = tmp5;
let startOfYear = startOfYear_mod;
if (!startOfYear) {
  const obj3 = { default: startOfYear };
  let tmp7 = obj3;
} else {
  tmp7 = startOfYear;
}
startOfYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfYear.default(arg0);
  return eachWeekendOfInterval.default({ start: startOfYear.default(arg0), end: endOfYear.default(arg0) });
};
export default exports.default;