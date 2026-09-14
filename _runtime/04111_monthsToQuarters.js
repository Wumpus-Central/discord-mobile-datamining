// === Module 4111: monthsToQuarters ===

// Module 4111 (monthsToQuarters)
import daysInWeek from "daysInWeek" /* 3904 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInQuarter);
};
export default exports.default;