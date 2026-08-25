// === Module 3898: setMinutes ===

// Module 3898 (setMinutes)
import toInteger from "toInteger" /* 3480 */;
import _typeof from "_typeof" /* 3476 */;
import requiredArgs from "requiredArgs" /* 3477 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setMinutes(toInteger, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(toInteger);
  defaultResult1.setMinutes(toInteger.default(arg1));
  return defaultResult1;
};
export default exports.default;