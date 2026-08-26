// === Module 3951: secondsToMinutes ===

// Module 3951 (secondsToMinutes)
import keys from "keys" /* 3719 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.secondsInMinute);
};
export default exports.default;