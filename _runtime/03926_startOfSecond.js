// === Module 3926: startOfSecond ===

// Module 3926 (startOfSecond)
import _typeof from "_typeof" /* 3572 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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

export default function startOfSecond(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setMilliseconds(0);
  return defaultResult1;
};
export default exports.default;