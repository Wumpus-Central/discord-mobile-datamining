// === Module 3789: endOfYear ===

// Module 3789 (endOfYear)
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

export default function endOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setFullYear(defaultResult1.getFullYear() + 1, 0, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;