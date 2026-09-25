// === Module 4130: eachWeekendOfMonth ===

// Module 4130 (eachWeekendOfMonth)
import eachWeekendOfInterval_mod from "eachWeekendOfInterval" /* 4129 */;
import startOfMonth_mod from "startOfMonth" /* 4131 */;
import endOfMonth_mod from "endOfMonth" /* 4116 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let eachWeekendOfInterval = eachWeekendOfInterval_mod;
if (!eachWeekendOfInterval) {
  let obj = { default: eachWeekendOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  const obj2 = { default: startOfMonth };
  let tmp5 = obj2;
} else {
  tmp5 = startOfMonth;
}
startOfMonth = tmp5;
let endOfMonth = endOfMonth_mod;
if (!endOfMonth) {
  const obj3 = { default: endOfMonth };
  let tmp7 = obj3;
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfMonth.default(arg0);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: defaultResult1, end: endOfMonth.default(arg0) };
    return eachWeekendOfInterval.default(obj);
  }
};
export default exports.default;