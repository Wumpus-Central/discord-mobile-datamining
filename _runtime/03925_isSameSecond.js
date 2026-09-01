// === Module 3925: isSameSecond ===

// Module 3925 (isSameSecond)
import startOfSecond from "startOfSecond" /* 3926 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!startOfSecond) {
  let obj = { default: null };
  obj[0] = startOfSecond;
  let tmp3 = obj;
} else {
  tmp3 = startOfSecond;
}
startOfSecond = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
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