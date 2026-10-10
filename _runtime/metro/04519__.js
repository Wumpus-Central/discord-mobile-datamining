// === Module 4519: ? ===

// Module 4519
import module_4203_mod from "module_4203" /* 4203 */;
import _typeof_mod from "module_4199" /* 4199 */;
import module_4435_mod from "module_4435" /* 4435 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj3 = { default: module_4435 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4435;
}
module_4435 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4435.default(defaultResult1) - module_4203.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;