// === Module 4111: ? ===

// Module 4111
import module_3697 from "module_3697" /* 3697 */;
import _typeof from "module_3693" /* 3693 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
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

export default function setHours(module_3697, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3697);
  defaultResult1.setHours(module_3697.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;