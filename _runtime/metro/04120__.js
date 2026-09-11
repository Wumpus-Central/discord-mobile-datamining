// === Module 4120: ? ===

// Module 4120
import module_3976 from "module_3976" /* 3976 */;
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;
import module_3699 from "module_3699" /* 3699 */;

if (!module_3976) {
  let obj = { default: module_3976 };
  let tmp3 = obj;
} else {
  tmp3 = module_3976;
}
module_3976 = tmp3;
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
if (!module_3699) {
  const obj1 = { default: module_3699 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3699;
}
module_3699 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3976.default(defaultResult1, arg2) - module_3699.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;