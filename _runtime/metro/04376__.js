// === Module 4376: ? ===

// Module 4376
import module_3962_mod from "module_3962" /* 3962 */;
import _typeof_mod from "module_3958" /* 3958 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setHours(module_3962, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3962);
  defaultResult1.setHours(module_3962.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;