// _runtime/03634_differenceInCalendarDays.js
import getTimezoneOffsetInMilliseconds from "03635_getTimezoneOffsetInMilliseconds.js";
import startOfDay from "03636_startOfDay.js";
import requiredArgs from "03473_requiredArgs.js";

if (!getTimezoneOffsetInMilliseconds) {
  let obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp3;
if (!startOfDay) {
  obj = { default: null };
  obj[0] = startOfDay;
  let tmp5 = obj;
} else {
  tmp5 = startOfDay;
}
startOfDay = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 86400000;

export default function differenceInCalendarDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};
export default exports.default;