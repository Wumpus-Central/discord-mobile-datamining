// === Module 4360: ? ===

// Module 4360
import module_3951_mod from "module_3951" /* 3951 */;
import _typeof_mod from "module_3947" /* 3947 */;
import module_4212_mod from "module_4212" /* 4212 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4212 = module_4212_mod;
if (!module_4212) {
  const obj3 = { default: module_4212 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4212;
}
module_4212 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3951.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4212.default(date1)));
  return defaultResult1;
};
export default exports.default;