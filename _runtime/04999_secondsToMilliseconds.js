// === Module 4999: secondsToMilliseconds ===

// Module 4999 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4768 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * daysInWeek.millisecondsInSecond;
};
export default exports.default;