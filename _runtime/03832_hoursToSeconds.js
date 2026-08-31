// === Module 3832: hoursToSeconds ===

// Module 3832 (hoursToSeconds)
import keys from "keys" /* 3721 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.secondsInHour);
};
export default exports.default;