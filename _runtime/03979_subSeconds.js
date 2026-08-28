// === Module 3979: subSeconds ===

// Module 3979 (subSeconds)
import toInteger from "toInteger" /* 3545 */;
import addSeconds from "addSeconds" /* 3708 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addSeconds) {
  obj = { default: null };
  obj[0] = addSeconds;
  let tmp5 = obj;
} else {
  tmp5 = addSeconds;
}
addSeconds = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addSeconds.default(arg0, -toInteger.default(arg1));
};
export default exports.default;