// === Module 4147: ? ===

// Module 4147
import module_3732_mod from "module_3732" /* 3732 */;
import _typeof_mod from "module_3728" /* 3728 */;
import module_3876_mod from "module_3876" /* 3876 */;
import module_3999_mod from "module_3999" /* 3999 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj = { default: module_3732 };
  let tmp3 = obj;
} else {
  tmp3 = module_3732;
}
module_3732 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj3 = { default: module_3876 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3876;
}
module_3876 = tmp7;
let module_3999 = module_3999_mod;
if (!module_3999) {
  const obj4 = { default: module_3999 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3999;
}
module_3999 = tmp9;
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
  return module_3876.default(defaultResult1, module_3732.default(arg1) - module_3999.default(defaultResult1));
};
export default exports.default;