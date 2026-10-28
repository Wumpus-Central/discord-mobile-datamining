// === Module 4706: ? ===

// Module 4706
import module_4291_mod from "module_4291" /* 4291 */;
import _typeof_mod from "module_4287" /* 4287 */;
import module_4435_mod from "module_4435" /* 4435 */;
import module_4558_mod from "module_4558" /* 4558 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj3 = { default: module_4435 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4435;
}
module_4435 = tmp7;
let module_4558 = module_4558_mod;
if (!module_4558) {
  const obj4 = { default: module_4558 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4558;
}
module_4558 = tmp9;
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
  return module_4435.default(defaultResult1, module_4291.default(arg1) - module_4558.default(defaultResult1));
};
export default exports.default;