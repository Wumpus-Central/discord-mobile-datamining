// === Module 4361: ? ===

// Module 4361
import module_3952_mod from "module_3952" /* 3952 */;
import _typeof_mod from "module_3948" /* 3948 */;
import module_4213_mod from "module_4213" /* 4213 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4213 = module_4213_mod;
if (!module_4213) {
  const obj3 = { default: module_4213 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4213;
}
module_4213 = tmp7;
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
  const defaultResult2 = module_3952.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4213.default(date1)));
  return defaultResult1;
};
export default exports.default;