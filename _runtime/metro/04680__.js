// === Module 4680: ? ===

// Module 4680
import module_4536_mod from "module_4536" /* 4536 */;
import _typeof_mod from "module_4255" /* 4255 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import module_4259_mod from "module_4259" /* 4259 */;

let module_4536 = module_4536_mod;
if (!module_4536) {
  const obj = { default: module_4536 };
  let tmp3 = obj;
} else {
  tmp3 = module_4536;
}
module_4536 = tmp3;
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
let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj4 = { default: module_4259 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4259;
}
module_4259 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4536.default(defaultResult1, arg2) - module_4259.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;