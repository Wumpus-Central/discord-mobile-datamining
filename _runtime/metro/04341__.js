// === Module 4341: ? ===

// Module 4341
import module_3922_mod from "module_3922" /* 3922 */;
import _typeof_mod from "module_3918" /* 3918 */;
import module_4331_mod from "module_4331" /* 4331 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4331 = module_4331_mod;
if (!module_4331) {
  const obj3 = { default: module_4331 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4331;
}
module_4331 = tmp7;
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
  const diff = module_3922.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4331.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;