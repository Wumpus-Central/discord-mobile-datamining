// === Module 4086: ? ===

// Module 4086
import module_3667 from "module_3667" /* 3667 */;
import _typeof from "module_3663" /* 3663 */;
import module_4076 from "module_4076" /* 4076 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_4076) {
  obj = { default: module_4076 };
  let tmp7 = obj;
} else {
  tmp7 = module_4076;
}
module_4076 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3667.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4076.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;