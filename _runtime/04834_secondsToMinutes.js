// === Module 4834: secondsToMinutes ===

// Module 4834 (secondsToMinutes)
import daysInWeek from "daysInWeek" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.secondsInMinute);
};
export default exports.default;