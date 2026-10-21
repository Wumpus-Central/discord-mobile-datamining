// === Module 4677: ? ===

// Module 4677
import module_4533_mod from "module_4533" /* 4533 */;
import _typeof_mod from "module_4252" /* 4252 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;
import module_4256_mod from "module_4256" /* 4256 */;

let module_4533 = module_4533_mod;
if (!module_4533) {
  const obj = { default: module_4533 };
  let tmp3 = obj;
} else {
  tmp3 = module_4533;
}
module_4533 = tmp3;
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
let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj4 = { default: module_4256 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4256;
}
module_4256 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4533.default(defaultResult1, arg2) - module_4256.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;