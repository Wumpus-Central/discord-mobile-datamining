// === Module 4406: yearsToMonths ===

// Module 4406 (yearsToMonths)
import daysInWeek from "daysInWeek" /* 4143 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInYear);
};