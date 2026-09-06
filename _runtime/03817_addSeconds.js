// === Module 3817: addSeconds ===

// Module 3817 (addSeconds)
import toInteger from "toInteger" /* 3654 */;
import addMilliseconds from "addMilliseconds" /* 3805 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addMilliseconds) {
  obj = { default: null };
  obj[0] = addMilliseconds;
  let tmp5 = obj;
} else {
  tmp5 = addMilliseconds;
}
addMilliseconds = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1, byhour, byminute, bysecond) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, 1000 * toInteger.default(arg1));
};
export default exports.default;