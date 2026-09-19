// === Module 4264: ? ===

// Module 4264
import module_3849_mod from "module_3849" /* 3849 */;
import _typeof_mod from "module_3845" /* 3845 */;
import module_3993_mod from "module_3993" /* 3993 */;
import module_4116_mod from "module_4116" /* 4116 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj3 = { default: module_3993 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3993;
}
module_3993 = tmp7;
let module_4116 = module_4116_mod;
if (!module_4116) {
  const obj4 = { default: module_4116 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4116;
}
module_4116 = tmp9;
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
  return module_3993.default(defaultResult1, module_3849.default(arg1) - module_4116.default(defaultResult1));
};
export default exports.default;