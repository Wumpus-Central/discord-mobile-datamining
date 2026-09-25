// === Module 4334: ? ===

// Module 4334
import module_3919_mod from "module_3919" /* 3919 */;
import _typeof_mod from "module_3915" /* 3915 */;
import module_4063_mod from "module_4063" /* 4063 */;
import module_4186_mod from "module_4186" /* 4186 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4063 = module_4063_mod;
if (!module_4063) {
  const obj3 = { default: module_4063 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4063;
}
module_4063 = tmp7;
let module_4186 = module_4186_mod;
if (!module_4186) {
  const obj4 = { default: module_4186 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4186;
}
module_4186 = tmp9;
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
  return module_4063.default(defaultResult1, module_3919.default(arg1) - module_4186.default(defaultResult1));
};
export default exports.default;