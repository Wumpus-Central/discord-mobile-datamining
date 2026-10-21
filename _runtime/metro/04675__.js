// === Module 4675: ? ===

// Module 4675
import module_4256_mod from "module_4256" /* 4256 */;
import _typeof_mod from "module_4252" /* 4252 */;
import module_4665_mod from "module_4665" /* 4665 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4665 = module_4665_mod;
if (!module_4665) {
  const obj3 = { default: module_4665 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4665;
}
module_4665 = tmp7;
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
  const diff = module_4256.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4665.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;