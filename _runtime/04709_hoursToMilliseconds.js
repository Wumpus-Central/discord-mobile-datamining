// === Module 4709: hoursToMilliseconds ===

// Module 4709 (hoursToMilliseconds)
import daysInWeek from "daysInWeek" /* 4600 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInHour);
};
export default exports.default;