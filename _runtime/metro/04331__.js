// === Module 4331: ? ===

// Module 4331
import module_3922_mod from "module_3922" /* 3922 */;
import _typeof_mod from "module_3918" /* 3918 */;
import module_4183_mod from "module_4183" /* 4183 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4183 = module_4183_mod;
if (!module_4183) {
  const obj3 = { default: module_4183 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4183;
}
module_4183 = tmp7;
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
  const defaultResult2 = module_3922.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4183.default(date1)));
  return defaultResult1;
};
export default exports.default;