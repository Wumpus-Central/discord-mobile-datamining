// === Module 3990: setHours ===

// Module 3990 (setHours)
import toInteger from "toInteger" /* 3576 */;
import _typeof from "_typeof" /* 3572 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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

export default function setHours(toInteger, uTCMinutes, uTCSeconds, uTCMilliseconds) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(toInteger);
  defaultResult1.setHours(toInteger.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;