// === Module 4116: ? ===

// Module 4116
import module_3699 from "module_3699" /* 3699 */;
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
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

export default function setMilliseconds(module_3699, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3699);
  defaultResult1.setMilliseconds(module_3699.default(arg1));
  return defaultResult1;
};
export default exports.default;