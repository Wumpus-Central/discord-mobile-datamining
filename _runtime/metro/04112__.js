// === Module 4112: ? ===

// Module 4112
import module_3697 from "module_3697" /* 3697 */;
import _typeof from "module_3693" /* 3693 */;
import module_3841 from "module_3841" /* 3841 */;
import module_3964 from "module_3964" /* 3964 */;
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
if (!module_3841) {
  obj = { default: module_3841 };
  let tmp7 = obj;
} else {
  tmp7 = module_3841;
}
module_3841 = tmp7;
if (!module_3964) {
  const obj1 = { default: module_3964 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3964;
}
module_3964 = tmp9;
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
  return module_3841.default(defaultResult1, module_3697.default(arg1) - module_3964.default(defaultResult1));
};
export default exports.default;