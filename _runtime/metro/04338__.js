// === Module 4338: ? ===

// Module 4338
import module_3919_mod from "module_3919" /* 3919 */;
import _typeof_mod from "module_3915" /* 3915 */;
import module_4328_mod from "module_4328" /* 4328 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4328 = module_4328_mod;
if (!module_4328) {
  const obj3 = { default: module_4328 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4328;
}
module_4328 = tmp7;
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
  const diff = module_3919.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4328.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;