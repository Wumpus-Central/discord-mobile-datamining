// === Module 3840: isFriday ===

// Module 3840 (isFriday)
import _typeof from "_typeof" /* 3541 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isFriday(arg0) {
  requiredArgs.default(1, arguments);
  return 5 === _typeof.default(arg0).getDay();
};
export default exports.default;