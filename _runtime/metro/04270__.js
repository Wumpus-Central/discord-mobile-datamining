// === Module 4270: ? ===

// Module 4270
import module_4126_mod from "module_4126" /* 4126 */;
import _typeof_mod from "module_3845" /* 3845 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;
import module_3849_mod from "module_3849" /* 3849 */;

let module_4126 = module_4126_mod;
if (!module_4126) {
  const obj = { default: module_4126 };
  let tmp3 = obj;
} else {
  tmp3 = module_4126;
}
module_4126 = tmp3;
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
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj4 = { default: module_3849 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3849;
}
module_3849 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4126.default(defaultResult1, arg2) - module_3849.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;