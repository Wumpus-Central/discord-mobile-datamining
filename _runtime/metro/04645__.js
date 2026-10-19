// === Module 4645: ? ===

// Module 4645
import module_4235_mod from "module_4235" /* 4235 */;
import _typeof_mod from "module_4231" /* 4231 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
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

export default function setDate(module_4235, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4235);
  defaultResult1.setDate(module_4235.default(arg1));
  return defaultResult1;
};
export default exports.default;