// === Module 3897: isThisISOWeek ===

// Module 3897 (isThisISOWeek)
import isSameISOWeek from "isSameISOWeek" /* 3887 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!isSameISOWeek) {
  let obj = { default: null };
  obj[0] = isSameISOWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameISOWeek;
}
isSameISOWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return isSameISOWeek.default(arg0, Date.now());
};
export default exports.default;