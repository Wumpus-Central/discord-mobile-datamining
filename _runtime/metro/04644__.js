// === Module 4644: ? ===

// Module 4644
import module_4235_mod from "module_4235" /* 4235 */;
import _typeof_mod from "module_4231" /* 4231 */;
import module_4496_mod from "module_4496" /* 4496 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4496 = module_4496_mod;
if (!module_4496) {
  const obj3 = { default: module_4496 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4496;
}
module_4496 = tmp7;
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
  const defaultResult2 = module_4235.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4496.default(date1)));
  return defaultResult1;
};
export default exports.default;