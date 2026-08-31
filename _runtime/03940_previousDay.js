// === Module 3940: previousDay ===

// Module 3940 (previousDay)
import requiredArgs from "requiredArgs" /* 3543 */;
import getDay from "getDay" /* 3805 */;
import subDays from "subDays" /* 3913 */;

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!getDay) {
  obj = { default: null };
  obj[0] = getDay;
  let tmp5 = obj;
} else {
  tmp5 = getDay;
}
getDay = tmp5;
if (!subDays) {
  obj = { default: null };
  obj[0] = subDays;
  let tmp7 = obj;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = getDay.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;