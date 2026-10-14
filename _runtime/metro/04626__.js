// === Module 4626: ? ===

// Module 4626
import module_4482_mod from "module_4482" /* 4482 */;
import _typeof_mod from "module_4201" /* 4201 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;
import module_4205_mod from "module_4205" /* 4205 */;

let module_4482 = module_4482_mod;
if (!module_4482) {
  const obj = { default: module_4482 };
  let tmp3 = obj;
} else {
  tmp3 = module_4482;
}
module_4482 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj4 = { default: module_4205 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4205;
}
module_4205 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4482.default(defaultResult1, arg2) - module_4205.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;