// _runtime/03757_eachWeekendOfMonth.js
import eachWeekendOfInterval from "03756_eachWeekendOfInterval.js";
import startOfMonth from "03758_startOfMonth.js";
import endOfMonth from "03743_endOfMonth.js";
import requiredArgs from "03543_requiredArgs.js";

if (!eachWeekendOfInterval) {
  let obj = { default: null };
  obj[0] = eachWeekendOfInterval;
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
if (!startOfMonth) {
  obj = { default: null };
  obj[0] = startOfMonth;
  let tmp5 = obj;
} else {
  tmp5 = startOfMonth;
}
startOfMonth = tmp5;
if (!endOfMonth) {
  obj = { default: null };
  obj[0] = endOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
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
    const obj = { start: null, end: null };
    obj[0] = defaultResult1;
    obj[1] = endOfMonth.default(arg0);
    return eachWeekendOfInterval.default(obj);
  }
};
export default exports.default;