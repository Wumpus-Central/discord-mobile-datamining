// === Module 3911: subMinutes ===

// Module 3911 (subMinutes)
import addMinutes from "addMinutes" /* 3640 */;
import requiredArgs from "requiredArgs" /* 3476 */;
import toInteger from "toInteger" /* 3479 */;

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