// === Module 4606: quartersToYears ===

// Module 4606 (quartersToYears)
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

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.quartersInYear);
};
export default exports.default;