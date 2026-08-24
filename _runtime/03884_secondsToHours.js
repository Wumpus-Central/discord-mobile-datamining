// === Module 3884: secondsToHours ===

// Module 3884 (secondsToHours)
import keys from "keys" /* 3654 */;
import requiredArgs from "requiredArgs" /* 3476 */;

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