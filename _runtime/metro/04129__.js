// === Module 4129: ? ===

// Module 4129
import module_3815_mod from "module_3815" /* 3815 */;
import _typeof_mod from "module_3811" /* 3811 */;
import module_4051_mod from "module_4051" /* 4051 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4051 = module_4051_mod;
if (!module_4051) {
  const obj3 = { default: module_4051 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4051;
}
module_4051 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4051.default(defaultResult1, arg2) - module_3815.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;