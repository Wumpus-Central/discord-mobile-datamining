// === Module 3933: isThisSecond ===

// Module 3933 (isThisSecond)
import isSameSecond from "isSameSecond" /* 3925 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!isSameSecond) {
  let obj = { default: null };
  obj[0] = isSameSecond;
  let tmp3 = obj;
} else {
  tmp3 = isSameSecond;
}
isSameSecond = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return isSameSecond.default(Date.now(), arg0);
};
export default exports.default;