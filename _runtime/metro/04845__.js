// === Module 4845: ? ===

// Module 4845
import module_4426_mod from "module_4426" /* 4426 */;
import _typeof_mod from "module_4422" /* 4422 */;
import module_4835_mod from "module_4835" /* 4835 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4835 = module_4835_mod;
if (!module_4835) {
  const obj3 = { default: module_4835 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4835;
}
module_4835 = tmp7;
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
  const diff = module_4426.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4835.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;