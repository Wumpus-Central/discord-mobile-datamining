// === Module 4269: ? ===

// Module 4269
import module_3849_mod from "module_3849" /* 3849 */;
import _typeof_mod from "module_3845" /* 3845 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
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

export default function setSeconds(module_3849, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3849);
  defaultResult1.setSeconds(module_3849.default(arg1));
  return defaultResult1;
};
export default exports.default;