// === Module 4712: ? ===

// Module 4712
import module_4568_mod from "module_4568" /* 4568 */;
import _typeof_mod from "module_4287" /* 4287 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;
import module_4291_mod from "module_4291" /* 4291 */;

let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj = { default: module_4568 };
  let tmp3 = obj;
} else {
  tmp3 = module_4568;
}
module_4568 = tmp3;
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
let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj4 = { default: module_4291 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4291;
}
module_4291 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4568.default(defaultResult1, arg2) - module_4291.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;