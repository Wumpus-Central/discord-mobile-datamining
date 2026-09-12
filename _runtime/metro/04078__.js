// === Module 4078: ? ===

// Module 4078
import startOfSecond from "startOfSecond" /* 4079 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!startOfSecond) {
  let obj = { default: startOfSecond };
  let tmp3 = obj;
} else {
  tmp3 = startOfSecond;
}
startOfSecond = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameSecond(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfSecond.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfSecond.default(arg1).getTime();
};
export default exports.default;