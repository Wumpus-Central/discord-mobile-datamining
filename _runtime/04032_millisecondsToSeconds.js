// === Module 4032: millisecondsToSeconds ===

// Module 4032 (millisecondsToSeconds)
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

export default function millisecondsToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.millisecondsInSecond);
};
export default exports.default;