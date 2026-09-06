// === Module 4002: ? ===

// Module 4002
import startOfQuarter from "startOfQuarter" /* 3862 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!startOfQuarter) {
  let obj = { default: startOfQuarter };
  let tmp3 = obj;
} else {
  tmp3 = startOfQuarter;
}
startOfQuarter = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
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