// === Module 4201: hoursToSeconds ===

// Module 4201 (hoursToSeconds)
import daysInWeek from "daysInWeek" /* 4090 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInHour);
};
export default exports.default;