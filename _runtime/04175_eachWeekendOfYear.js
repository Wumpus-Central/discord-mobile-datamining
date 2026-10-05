// === Module 4175: eachWeekendOfYear ===

// Module 4175 (eachWeekendOfYear)
import eachWeekendOfInterval_mod from "eachWeekendOfInterval" /* 4172 */;
import endOfYear_mod from "endOfYear" /* 4176 */;
import startOfYear_mod from "startOfYear" /* 4177 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let eachWeekendOfInterval = eachWeekendOfInterval_mod;
if (!eachWeekendOfInterval) {
  let obj = { default: eachWeekendOfInterval };
  tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
let endOfYear = endOfYear_mod;
if (!endOfYear) {
  tmp5 = { default: endOfYear };
  const obj2 = { default: endOfYear };
} else {
  tmp5 = endOfYear;
}
endOfYear = tmp5;
let startOfYear = startOfYear_mod;
if (!startOfYear) {
  tmp7 = { default: startOfYear };
  const obj3 = { default: startOfYear };
} else {
  tmp7 = startOfYear;
}
startOfYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfYear.default(arg0);
  const obj = { start: defaultResult1, end: endOfYear.default(arg0) };
  return eachWeekendOfInterval.default(obj);
};