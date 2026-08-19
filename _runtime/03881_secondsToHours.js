// === Module 3881: secondsToHours ===

// Module 3881 (secondsToHours)
import keys from "keys" /* 3651 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.secondsInHour);
};
export default exports.default;