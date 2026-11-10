// === Module 4835: ? ===

// Module 4835
import module_4426_mod from "module_4426" /* 4426 */;
import _typeof_mod from "module_4422" /* 4422 */;
import module_4687_mod from "module_4687" /* 4687 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4687 = module_4687_mod;
if (!module_4687) {
  const obj3 = { default: module_4687 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4687;
}
module_4687 = tmp7;
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
  const defaultResult2 = module_4426.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4687.default(date1)));
  return defaultResult1;
};
export default exports.default;