// === Module 4840: ? ===

// Module 4840
import module_4424_mod from "module_4424" /* 4424 */;
import _typeof_mod from "module_4420" /* 4420 */;
import module_4692_mod from "module_4692" /* 4692 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj = { default: module_4424 };
  let tmp3 = obj;
} else {
  tmp3 = module_4424;
}
module_4424 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4692 = module_4692_mod;
if (!module_4692) {
  const obj3 = { default: module_4692 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4692;
}
module_4692 = tmp7;
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
  const diff = module_4692.default(defaultResult1) - module_4424.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;