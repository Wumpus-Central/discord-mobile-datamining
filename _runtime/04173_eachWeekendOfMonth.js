// === Module 4173: eachWeekendOfMonth ===

// Module 4173 (eachWeekendOfMonth)
import eachWeekendOfInterval_mod from "eachWeekendOfInterval" /* 4172 */;
import startOfMonth_mod from "startOfMonth" /* 4174 */;
import endOfMonth_mod from "endOfMonth" /* 4159 */;
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
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  tmp5 = { default: startOfMonth };
  const obj2 = { default: startOfMonth };
} else {
  tmp5 = startOfMonth;
}
startOfMonth = tmp5;
let endOfMonth = endOfMonth_mod;
if (!endOfMonth) {
  tmp7 = { default: endOfMonth };
  const obj3 = { default: endOfMonth };
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfMonth.default(arg0);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: defaultResult1, end: endOfMonth.default(arg0) };
    return eachWeekendOfInterval.default(obj);
  }
};