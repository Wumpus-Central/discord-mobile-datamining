// === Module 4082: ? ===

// Module 4082
import module_3667 from "module_3667" /* 3667 */;
import _typeof from "module_3663" /* 3663 */;
import module_3811 from "module_3811" /* 3811 */;
import module_3934 from "module_3934" /* 3934 */;
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
if (!module_3811) {
  obj = { default: module_3811 };
  let tmp7 = obj;
} else {
  tmp7 = module_3811;
}
module_3811 = tmp7;
if (!module_3934) {
  const obj1 = { default: module_3934 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3934;
}
module_3934 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_3811.default(defaultResult1, module_3667.default(arg1) - module_3934.default(defaultResult1));
};
export default exports.default;