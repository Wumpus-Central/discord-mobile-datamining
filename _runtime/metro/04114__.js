// === Module 4114: ? ===

// Module 4114
import module_3699 from "module_3699" /* 3699 */;
import _typeof from "module_3695" /* 3695 */;
import module_3843 from "module_3843" /* 3843 */;
import module_3966 from "module_3966" /* 3966 */;
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
if (!module_3843) {
  obj = { default: module_3843 };
  let tmp7 = obj;
} else {
  tmp7 = module_3843;
}
module_3843 = tmp7;
if (!module_3966) {
  const obj1 = { default: module_3966 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3966;
}
module_3966 = tmp9;
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
  return module_3843.default(defaultResult1, module_3699.default(arg1) - module_3966.default(defaultResult1));
};
export default exports.default;