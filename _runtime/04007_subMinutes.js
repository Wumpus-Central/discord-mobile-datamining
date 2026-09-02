// === Module 4007: subMinutes ===

// Module 4007 (subMinutes)
import addMinutes from "addMinutes" /* 3736 */;
import requiredArgs from "requiredArgs" /* 3572 */;
import toInteger from "toInteger" /* 3575 */;

if (!addMinutes) {
  let obj = { default: null };
  obj[0] = addMinutes;
  let tmp3 = obj;
} else {
  tmp3 = addMinutes;
}
addMinutes = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMinutes.default(arg0, -toInteger.default(arg1));
};
export default exports.default;