// === Module 4702: ? ===

// Module 4702
import module_4292_mod from "module_4292" /* 4292 */;
import _typeof_mod from "module_4288" /* 4288 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
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

export default function setDate(module_4292, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4292);
  defaultResult1.setDate(module_4292.default(arg1));
  return defaultResult1;
};
export default exports.default;