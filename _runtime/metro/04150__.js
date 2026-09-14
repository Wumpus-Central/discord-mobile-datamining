// === Module 4150: ? ===

// Module 4150
import module_4006_mod from "module_4006" /* 4006 */;
import _typeof_mod from "module_3725" /* 3725 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;
import module_3729_mod from "module_3729" /* 3729 */;

let module_4006 = module_4006_mod;
if (!module_4006) {
  const obj = { default: module_4006 };
  let tmp3 = obj;
} else {
  tmp3 = module_4006;
}
module_4006 = tmp3;
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
let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj4 = { default: module_3729 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3729;
}
module_3729 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4006.default(defaultResult1, arg2) - module_3729.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;