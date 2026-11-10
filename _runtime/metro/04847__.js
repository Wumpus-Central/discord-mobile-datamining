// === Module 4847: ? ===

// Module 4847
import module_4703_mod from "module_4703" /* 4703 */;
import _typeof_mod from "module_4422" /* 4422 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;
import module_4426_mod from "module_4426" /* 4426 */;

let module_4703 = module_4703_mod;
if (!module_4703) {
  const obj = { default: module_4703 };
  let tmp3 = obj;
} else {
  tmp3 = module_4703;
}
module_4703 = tmp3;
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
let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj4 = { default: module_4426 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4426;
}
module_4426 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4703.default(defaultResult1, arg2) - module_4426.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;