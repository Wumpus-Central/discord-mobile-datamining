// === Module 3865: eachWeekendOfMonth ===

// Module 3865 (eachWeekendOfMonth)
import eachWeekendOfInterval from "eachWeekendOfInterval" /* 3864 */;
import startOfMonth from "startOfMonth" /* 3866 */;
import endOfMonth from "endOfMonth" /* 3851 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!eachWeekendOfInterval) {
  let obj = { default: eachWeekendOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
if (!startOfMonth) {
  obj = { default: startOfMonth };
  let tmp5 = obj;
} else {
  tmp5 = startOfMonth;
}
startOfMonth = tmp5;
if (!endOfMonth) {
  obj = { default: endOfMonth };
  let tmp7 = obj;
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
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