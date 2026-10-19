// === Module 4672: weeksToDays ===

// Module 4672 (weeksToDays)
import daysInWeek from "daysInWeek" /* 4410 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function weeksToDays(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.daysInWeek);
};
export default exports.default;