// === Module 4713: ? ===

// Module 4713
import module_4569_mod from "module_4569" /* 4569 */;
import _typeof_mod from "module_4288" /* 4288 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;
import module_4292_mod from "module_4292" /* 4292 */;

let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj = { default: module_4569 };
  let tmp3 = obj;
} else {
  tmp3 = module_4569;
}
module_4569 = tmp3;
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
let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj4 = { default: module_4292 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4292;
}
module_4292 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4569.default(defaultResult1, arg2) - module_4292.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;