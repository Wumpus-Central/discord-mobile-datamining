// === Module 3949: quartersToYears ===

// Module 3949 (quartersToYears)
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

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.quartersInYear);
};
export default exports.default;