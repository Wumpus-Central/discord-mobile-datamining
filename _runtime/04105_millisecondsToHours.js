// === Module 4105: millisecondsToHours ===

// Module 4105 (millisecondsToHours)
import daysInWeek from "daysInWeek" /* 3904 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInHour);
};
export default exports.default;