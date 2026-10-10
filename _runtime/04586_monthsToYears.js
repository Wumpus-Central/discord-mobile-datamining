// === Module 4586: monthsToYears ===

// Module 4586 (monthsToYears)
import daysInWeek from "daysInWeek" /* 4378 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

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