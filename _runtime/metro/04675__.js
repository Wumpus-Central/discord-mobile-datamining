// === Module 4675: ? ===

// Module 4675
import module_4259_mod from "module_4259" /* 4259 */;
import _typeof_mod from "module_4255" /* 4255 */;
import module_4527_mod from "module_4527" /* 4527 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4527 = module_4527_mod;
if (!module_4527) {
  const obj3 = { default: module_4527 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4527;
}
module_4527 = tmp7;
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
  const diff = module_4527.default(defaultResult1) - module_4259.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;