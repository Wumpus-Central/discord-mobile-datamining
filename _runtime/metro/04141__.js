// === Module 4141: ? ===

// Module 4141
import module_3732_mod from "module_3732" /* 3732 */;
import _typeof_mod from "module_3728" /* 3728 */;
import module_3993_mod from "module_3993" /* 3993 */;
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
let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj3 = { default: module_3993 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3993;
}
module_3993 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3732.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_3993.default(date1)));
  return defaultResult1;
};
export default exports.default;