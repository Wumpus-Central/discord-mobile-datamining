// === Module 3904: isThisYear ===

// Module 3904 (isThisYear)
import isSameYear from "isSameYear" /* 3896 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!isSameYear) {
  let obj = { default: null };
  obj[0] = isSameYear;
  let tmp3 = obj;
} else {
  tmp3 = isSameYear;
}
isSameYear = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(arg0, Date.now());
};
export default exports.default;