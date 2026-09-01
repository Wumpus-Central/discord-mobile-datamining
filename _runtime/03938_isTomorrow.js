// === Module 3938: isTomorrow ===

// Module 3938 (isTomorrow)
import addDays from "addDays" /* 3720 */;
import isSameDay from "isSameDay" /* 3753 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
addDays = tmp3;
if (!isSameDay) {
  obj = { default: null };
  obj[0] = isSameDay;
  let tmp5 = obj;
} else {
  tmp5 = isSameDay;
}
isSameDay = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, addDays.default(Date.now(), 1));
};
export default exports.default;