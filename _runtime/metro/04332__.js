// === Module 4332: ? ===

// Module 4332
import module_3917_mod from "module_3917" /* 3917 */;
import _typeof_mod from "module_3913" /* 3913 */;
import module_4061_mod from "module_4061" /* 4061 */;
import module_4184_mod from "module_4184" /* 4184 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4061 = module_4061_mod;
if (!module_4061) {
  const obj3 = { default: module_4061 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4061;
}
module_4061 = tmp7;
let module_4184 = module_4184_mod;
if (!module_4184) {
  const obj4 = { default: module_4184 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4184;
}
module_4184 = tmp9;
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
  return module_4061.default(defaultResult1, module_3917.default(arg1) - module_4184.default(defaultResult1));
};
export default exports.default;