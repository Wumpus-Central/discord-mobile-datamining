// === Module 4048: minutesToSeconds ===

// Module 4048 (minutesToSeconds)
import daysInWeek from "daysInWeek" /* 3842 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInMinute);
};
export default exports.default;