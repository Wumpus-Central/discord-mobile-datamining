// === Module 4839: ? ===

// Module 4839
import module_4425_mod from "module_4425" /* 4425 */;
import _typeof_mod from "module_4421" /* 4421 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
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

export default function setHours(module_4425, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4425);
  defaultResult1.setHours(module_4425.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;