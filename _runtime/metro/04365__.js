// === Module 4365: ? ===

// Module 4365
import module_3951_mod from "module_3951" /* 3951 */;
import _typeof_mod from "module_3947" /* 3947 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setHours(module_3951, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3951);
  defaultResult1.setHours(module_3951.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;