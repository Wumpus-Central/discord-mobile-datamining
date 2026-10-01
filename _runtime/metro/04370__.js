// === Module 4370: ? ===

// Module 4370
import module_3951_mod from "module_3951" /* 3951 */;
import _typeof_mod from "module_3947" /* 3947 */;
import module_4360_mod from "module_4360" /* 4360 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4360 = module_4360_mod;
if (!module_4360) {
  const obj3 = { default: module_4360 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4360;
}
module_4360 = tmp7;
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
  const diff = module_3951.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4360.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;