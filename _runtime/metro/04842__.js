// === Module 4842: ? ===

// Module 4842
import module_4426_mod from "module_4426" /* 4426 */;
import _typeof_mod from "module_4422" /* 4422 */;
import module_4694_mod from "module_4694" /* 4694 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4694 = module_4694_mod;
if (!module_4694) {
  const obj3 = { default: module_4694 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4694;
}
module_4694 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4694.default(defaultResult1) - module_4426.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;