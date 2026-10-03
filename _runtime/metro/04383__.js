// === Module 4383: ? ===

// Module 4383
import module_4239_mod from "module_4239" /* 4239 */;
import _typeof_mod from "module_3958" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;
import module_3962_mod from "module_3962" /* 3962 */;

let module_4239 = module_4239_mod;
if (!module_4239) {
  const obj = { default: module_4239 };
  let tmp3 = obj;
} else {
  tmp3 = module_4239;
}
module_4239 = tmp3;
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
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj4 = { default: module_3962 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3962;
}
module_3962 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4239.default(defaultResult1, arg2) - module_3962.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;