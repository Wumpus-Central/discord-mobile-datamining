// === Module 4368: ? ===

// Module 4368
import module_3952_mod from "module_3952" /* 3952 */;
import _typeof_mod from "module_3948" /* 3948 */;
import module_4220_mod from "module_4220" /* 4220 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4220 = module_4220_mod;
if (!module_4220) {
  const obj3 = { default: module_4220 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4220;
}
module_4220 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4220.default(defaultResult1) - module_3952.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;