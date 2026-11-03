// === Module 4841: ? ===

// Module 4841
import module_4425_mod from "module_4425" /* 4425 */;
import _typeof_mod from "module_4421" /* 4421 */;
import module_4693_mod from "module_4693" /* 4693 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4693 = module_4693_mod;
if (!module_4693) {
  const obj3 = { default: module_4693 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4693;
}
module_4693 = tmp7;
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
  const diff = module_4693.default(defaultResult1) - module_4425.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;