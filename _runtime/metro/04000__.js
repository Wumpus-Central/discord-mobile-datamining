// === Module 4000: ? ===

// Module 4000
import startOfMinute from "startOfMinute" /* 3859 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!startOfMinute) {
  let obj = { default: startOfMinute };
  let tmp3 = obj;
} else {
  tmp3 = startOfMinute;
}
startOfMinute = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameMinute(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfMinute.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfMinute.default(arg1).getTime();
};
export default exports.default;