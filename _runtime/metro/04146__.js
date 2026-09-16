// === Module 4146: ? ===

// Module 4146
import module_3730_mod from "module_3730" /* 3730 */;
import _typeof_mod from "module_3726" /* 3726 */;
import module_3998_mod from "module_3998" /* 3998 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3998 = module_3998_mod;
if (!module_3998) {
  const obj3 = { default: module_3998 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3998;
}
module_3998 = tmp7;
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
  const diff = module_3998.default(defaultResult1) - module_3730.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;