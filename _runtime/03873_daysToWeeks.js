// === Module 3873: daysToWeeks ===

// Module 3873 (daysToWeeks)
import daysInWeek from "daysInWeek" /* 3874 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function daysToWeeks(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.daysInWeek);
};
export default exports.default;