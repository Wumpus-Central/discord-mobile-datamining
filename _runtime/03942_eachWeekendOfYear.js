// === Module 3942: eachWeekendOfYear ===

// Module 3942 (eachWeekendOfYear)
import eachWeekendOfInterval from "eachWeekendOfInterval" /* 3939 */;
import endOfYear from "endOfYear" /* 3943 */;
import startOfYear from "startOfYear" /* 3944 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!eachWeekendOfInterval) {
  let obj = { default: eachWeekendOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
if (!endOfYear) {
  obj = { default: endOfYear };
  let tmp5 = obj;
} else {
  tmp5 = endOfYear;
}
endOfYear = tmp5;
if (!startOfYear) {
  obj = { default: startOfYear };
  let tmp7 = obj;
} else {
  tmp7 = startOfYear;
}
startOfYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
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