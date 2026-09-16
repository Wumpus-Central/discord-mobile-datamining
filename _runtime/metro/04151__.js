// === Module 4151: ? ===

// Module 4151
import module_4007_mod from "module_4007" /* 4007 */;
import _typeof_mod from "module_3726" /* 3726 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;
import module_3730_mod from "module_3730" /* 3730 */;

let module_4007 = module_4007_mod;
if (!module_4007) {
  const obj = { default: module_4007 };
  let tmp3 = obj;
} else {
  tmp3 = module_4007;
}
module_4007 = tmp3;
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
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj4 = { default: module_3730 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3730;
}
module_3730 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4007.default(defaultResult1, arg2) - module_3730.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;