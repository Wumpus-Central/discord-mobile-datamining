// === Module 4278: ? ===

// Module 4278
import module_3962_mod from "module_3962" /* 3962 */;
import _typeof_mod from "module_3958" /* 3958 */;
import module_4194_mod from "module_4194" /* 4194 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4194 = module_4194_mod;
if (!module_4194) {
  const obj3 = { default: module_4194 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4194;
}
module_4194 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4194.default(defaultResult1) - module_3962.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;