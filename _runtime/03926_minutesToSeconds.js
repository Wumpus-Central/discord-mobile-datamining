// === Module 3926: minutesToSeconds ===

// Module 3926 (minutesToSeconds)
import keys from "keys" /* 3720 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.secondsInMinute);
};
export default exports.default;