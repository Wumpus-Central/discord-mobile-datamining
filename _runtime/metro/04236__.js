// === Module 4236: ? ===

// Module 4236
import module_4092_mod from "module_4092" /* 4092 */;
import _typeof_mod from "module_3811" /* 3811 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;
import module_3815_mod from "module_3815" /* 3815 */;

let module_4092 = module_4092_mod;
if (!module_4092) {
  const obj = { default: module_4092 };
  let tmp3 = obj;
} else {
  tmp3 = module_4092;
}
module_4092 = tmp3;
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
let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj4 = { default: module_3815 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3815;
}
module_3815 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4092.default(defaultResult1, arg2) - module_3815.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;