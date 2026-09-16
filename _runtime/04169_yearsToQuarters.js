// === Module 4169: yearsToQuarters ===

// Module 4169 (yearsToQuarters)
import daysInWeek from "daysInWeek" /* 3905 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.quartersInYear);
};
export default exports.default;