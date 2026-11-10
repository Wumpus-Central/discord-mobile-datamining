// === Module 4600: daysToWeeks ===

// Module 4600 (daysToWeeks)
import daysInWeek from "daysInWeek" /* 4601 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let requiredArgs = requiredArgs_mod;
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