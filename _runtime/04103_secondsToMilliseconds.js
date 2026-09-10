// === Module 4103: secondsToMilliseconds ===

// Module 4103 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 3872 */;
import requiredArgs from "requiredArgs" /* 3694 */;

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