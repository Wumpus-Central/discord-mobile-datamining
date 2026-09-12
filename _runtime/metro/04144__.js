// === Module 4144: ? ===

// Module 4144
import module_3729 from "module_3729" /* 3729 */;
import _typeof from "module_3725" /* 3725 */;
import module_3873 from "module_3873" /* 3873 */;
import module_3996 from "module_3996" /* 3996 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3873) {
  obj = { default: module_3873 };
  let tmp7 = obj;
} else {
  tmp7 = module_3873;
}
module_3873 = tmp7;
if (!module_3996) {
  const obj1 = { default: module_3996 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3996;
}
module_3996 = tmp9;
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
  return module_3873.default(defaultResult1, module_3729.default(arg1) - module_3996.default(defaultResult1));
};
export default exports.default;