// === Module 3941: isYesterday ===

// Module 3941 (isYesterday)
import isSameDay from "isSameDay" /* 3752 */;
import subDays from "subDays" /* 3942 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!isSameDay) {
  let obj = { default: null };
  obj[0] = isSameDay;
  let tmp3 = obj;
} else {
  tmp3 = isSameDay;
}
isSameDay = tmp3;
if (!subDays) {
  obj = { default: null };
  obj[0] = subDays;
  let tmp5 = obj;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;