// === Module 4082: monthsToYears ===

// Module 4082 (monthsToYears)
import daysInWeek from "daysInWeek" /* 3874 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInYear);
};
export default exports.default;