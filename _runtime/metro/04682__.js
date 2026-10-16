// === Module 4682: ? ===

// Module 4682
import module_4262_mod from "module_4262" /* 4262 */;
import _typeof_mod from "module_4258" /* 4258 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
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

export default function setSeconds(module_4262, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4262);
  defaultResult1.setSeconds(module_4262.default(arg1));
  return defaultResult1;
};
export default exports.default;