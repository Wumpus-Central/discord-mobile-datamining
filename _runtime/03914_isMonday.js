// === Module 3914: isMonday ===

// Module 3914 (isMonday)
import _typeof from "_typeof" /* 3571 */;
import requiredArgs from "requiredArgs" /* 3572 */;

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

export default function isMonday(arg0) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(arg0).getDay();
};
export default exports.default;