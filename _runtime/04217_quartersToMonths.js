// === Module 4217: quartersToMonths ===

// Module 4217 (quartersToMonths)
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

export default function quartersToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInQuarter);
};
export default exports.default;