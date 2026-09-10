// === Module 3982: hoursToMinutes ===

// Module 3982 (hoursToMinutes)
import daysInWeek from "daysInWeek" /* 3872 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.minutesInHour);
};
export default exports.default;