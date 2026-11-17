// === Module 4909: ? ===

// Module 4909
import module_4593_mod from "module_4593" /* 4593 */;
import _typeof_mod from "module_4589" /* 4589 */;
import module_4825_mod from "module_4825" /* 4825 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4825 = module_4825_mod;
if (!module_4825) {
  const obj3 = { default: module_4825 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4825;
}
module_4825 = tmp7;
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
  const diff = module_4825.default(defaultResult1) - module_4593.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;