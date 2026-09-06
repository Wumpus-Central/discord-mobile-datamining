// === Module 4068: ? ===

// Module 4068
import module_3654 from "module_3654" /* 3654 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setHours(module_3654, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3654);
  defaultResult1.setHours(module_3654.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;