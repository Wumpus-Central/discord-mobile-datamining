// === Module 4366: ? ===

// Module 4366
import module_3951_mod from "module_3951" /* 3951 */;
import _typeof_mod from "module_3947" /* 3947 */;
import module_4095_mod from "module_4095" /* 4095 */;
import module_4218_mod from "module_4218" /* 4218 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4095 = module_4095_mod;
if (!module_4095) {
  const obj3 = { default: module_4095 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4095;
}
module_4095 = tmp7;
let module_4218 = module_4218_mod;
if (!module_4218) {
  const obj4 = { default: module_4218 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4218;
}
module_4218 = tmp9;
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
  return module_4095.default(defaultResult1, module_3951.default(arg1) - module_4218.default(defaultResult1));
};
export default exports.default;