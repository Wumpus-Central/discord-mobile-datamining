// === Module 4945: ? ===

// Module 4945
import module_4526_mod from "module_4526" /* 4526 */;
import _typeof_mod from "module_4522" /* 4522 */;
import module_4935_mod from "module_4935" /* 4935 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4935 = module_4935_mod;
if (!module_4935) {
  const obj3 = { default: module_4935 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4935;
}
module_4935 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4526.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4935.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;