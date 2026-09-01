// === Module 3930: isThisMinute ===

// Module 3930 (isThisMinute)
import isSameMinute from "isSameMinute" /* 3922 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!isSameMinute) {
  let obj = { default: null };
  obj[0] = isSameMinute;
  let tmp3 = obj;
} else {
  tmp3 = isSameMinute;
}
isSameMinute = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return isSameMinute.default(Date.now(), arg0);
};
export default exports.default;