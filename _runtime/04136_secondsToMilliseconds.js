// === Module 4136: secondsToMilliseconds ===

// Module 4136 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 3905 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

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