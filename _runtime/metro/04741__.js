// === Module 4741: ? ===

// Module 4741
import module_4427_mod from "module_4427" /* 4427 */;
import _typeof_mod from "module_4423" /* 4423 */;
import module_4663_mod from "module_4663" /* 4663 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4663 = module_4663_mod;
if (!module_4663) {
  const obj3 = { default: module_4663 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4663;
}
module_4663 = tmp7;
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
  const diff = module_4663.default(defaultResult1, arg2) - module_4427.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;