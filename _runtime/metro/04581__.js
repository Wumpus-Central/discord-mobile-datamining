// === Module 4581: ? ===

// Module 4581
import module_4162_mod from "module_4162" /* 4162 */;
import _typeof_mod from "module_4158" /* 4158 */;
import module_4571_mod from "module_4571" /* 4571 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj3 = { default: module_4571 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4571;
}
module_4571 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4162.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4571.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;