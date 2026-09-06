// _runtime/03867_eachWeekendOfYear.js
import eachWeekendOfInterval from "03864_eachWeekendOfInterval.js";
import endOfYear from "03868_endOfYear.js";
import startOfYear from "03869_startOfYear.js";
import requiredArgs from "03651_requiredArgs.js";

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