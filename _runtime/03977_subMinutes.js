// === Module 3977: subMinutes ===

// Module 3977 (subMinutes)
import addMinutes from "addMinutes" /* 3706 */;
import requiredArgs from "requiredArgs" /* 3542 */;
import toInteger from "toInteger" /* 3545 */;

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