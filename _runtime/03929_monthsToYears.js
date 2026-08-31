// === Module 3929: monthsToYears ===

// Module 3929 (monthsToYears)
import keys from "keys" /* 3721 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.monthsInYear);
};
export default exports.default;