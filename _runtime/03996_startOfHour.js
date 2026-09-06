// === Module 3996: startOfHour ===

// Module 3996 (startOfHour)
import _typeof from "_typeof" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

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

export default function startOfHour(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;