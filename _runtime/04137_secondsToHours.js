// === Module 4137: secondsToHours ===

// Module 4137 (secondsToHours)
import daysInWeek from "daysInWeek" /* 3907 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.secondsInHour);
};
export default exports.default;