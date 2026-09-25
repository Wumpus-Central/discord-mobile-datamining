// === Module 4301: monthsToQuarters ===

// Module 4301 (monthsToQuarters)
import daysInWeek from "daysInWeek" /* 4094 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

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