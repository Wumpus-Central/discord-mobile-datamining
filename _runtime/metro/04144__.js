// === Module 4144: ? ===

// Module 4144
import module_3729_mod from "module_3729" /* 3729 */;
import _typeof_mod from "module_3725" /* 3725 */;
import module_3873_mod from "module_3873" /* 3873 */;
import module_3996_mod from "module_3996" /* 3996 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3873 = module_3873_mod;
if (!module_3873) {
  const obj3 = { default: module_3873 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3873;
}
module_3873 = tmp7;
let module_3996 = module_3996_mod;
if (!module_3996) {
  const obj4 = { default: module_3996 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3996;
}
module_3996 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
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