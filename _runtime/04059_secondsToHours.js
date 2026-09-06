// === Module 4059: secondsToHours ===

// Module 4059 (secondsToHours)
import keys from "keys" /* 3829 */;
import requiredArgs from "requiredArgs" /* 3651 */;

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