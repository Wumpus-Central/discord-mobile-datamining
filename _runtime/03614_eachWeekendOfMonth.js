// _runtime/03614_eachWeekendOfMonth.js
import eachWeekendOfInterval from "eachWeekendOfInterval";
import startOfMonth from "startOfMonth";
import endOfMonth from "endOfMonth";
import requiredArgs from "requiredArgs";

if (!eachWeekendOfInterval) {
  let obj = { default: null };
  obj[0] = eachWeekendOfInterval;
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
let c0 = tmp3;
if (!startOfMonth) {
  obj = { default: null };
  obj[0] = startOfMonth;
  let tmp5 = obj;
} else {
  tmp5 = startOfMonth;
}
let closure_1 = tmp5;
if (!endOfMonth) {
  obj = { default: null };
  obj[0] = endOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = endOfMonth;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function eachWeekendOfMonth(arg0) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp5.default(arg0);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: null, end: null };
    obj[0] = defaultResult1;
    obj[1] = tmp7.default(arg0);
    return tmp3.default(obj);
  }
};
export default exports.default;