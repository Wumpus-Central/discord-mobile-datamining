// _runtime/03760_differenceInCalendarWeeks.js
import startOfWeek from "03730_startOfWeek.js";
import getTimezoneOffsetInMilliseconds from "03734_getTimezoneOffsetInMilliseconds.js";
import requiredArgs from "03572_requiredArgs.js";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!getTimezoneOffsetInMilliseconds) {
  obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp5 = obj;
} else {
  tmp5 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarWeeks(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const defaultResult2 = startOfWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};
export default exports.default;