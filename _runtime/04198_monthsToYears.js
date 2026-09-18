// === Module 4198: monthsToYears ===

// Module 4198 (monthsToYears)
import daysInWeek from "daysInWeek" /* 3990 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let requiredArgs = requiredArgs_mod;
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