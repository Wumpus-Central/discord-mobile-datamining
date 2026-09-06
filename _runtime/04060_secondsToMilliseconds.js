// === Module 4060: secondsToMilliseconds ===

// Module 4060 (secondsToMilliseconds)
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

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * keys.millisecondsInSecond;
};
export default exports.default;