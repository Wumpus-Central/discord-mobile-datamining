// === Module 4683: ? ===

// Module 4683
import module_4539_mod from "module_4539" /* 4539 */;
import _typeof_mod from "module_4258" /* 4258 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;
import module_4262_mod from "module_4262" /* 4262 */;

let module_4539 = module_4539_mod;
if (!module_4539) {
  const obj = { default: module_4539 };
  let tmp3 = obj;
} else {
  tmp3 = module_4539;
}
module_4539 = tmp3;
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
let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj4 = { default: module_4262 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4262;
}
module_4262 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4539.default(defaultResult1, arg2) - module_4262.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;