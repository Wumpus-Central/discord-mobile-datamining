// === Module 3951: millisecondsToHours ===

// Module 3951 (millisecondsToHours)
import keys from "keys" /* 3750 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.millisecondsInHour);
};
export default exports.default;