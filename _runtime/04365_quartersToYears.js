// === Module 4365: quartersToYears ===

// Module 4365 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4137 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.quartersInYear);
};