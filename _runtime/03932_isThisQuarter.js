// === Module 3932: isThisQuarter ===

// Module 3932 (isThisQuarter)
import isSameQuarter from "isSameQuarter" /* 3924 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!isSameQuarter) {
  let obj = { default: null };
  obj[0] = isSameQuarter;
  let tmp3 = obj;
} else {
  tmp3 = isSameQuarter;
}
isSameQuarter = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), arg0);
};
export default exports.default;