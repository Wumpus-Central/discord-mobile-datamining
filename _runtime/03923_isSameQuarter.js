// === Module 3923: isSameQuarter ===

// Module 3923 (isSameQuarter)
import startOfQuarter from "startOfQuarter" /* 3783 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!startOfQuarter) {
  let obj = { default: null };
  obj[0] = startOfQuarter;
  let tmp3 = obj;
} else {
  tmp3 = startOfQuarter;
}
startOfQuarter = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfQuarter.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfQuarter.default(arg1).getTime();
};
export default exports.default;