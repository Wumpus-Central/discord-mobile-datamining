// === Module 4719: ? ===

// Module 4719
import module_4575_mod from "module_4575" /* 4575 */;
import _typeof_mod from "module_4294" /* 4294 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;
import module_4298_mod from "module_4298" /* 4298 */;

let module_4575 = module_4575_mod;
if (!module_4575) {
  const obj = { default: module_4575 };
  let tmp3 = obj;
} else {
  tmp3 = module_4575;
}
module_4575 = tmp3;
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
let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj4 = { default: module_4298 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4298;
}
module_4298 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4575.default(defaultResult1, arg2) - module_4298.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;