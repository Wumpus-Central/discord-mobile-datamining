// === Module 4671: ? ===

// Module 4671
import module_4262_mod from "module_4262" /* 4262 */;
import _typeof_mod from "module_4258" /* 4258 */;
import module_4523_mod from "module_4523" /* 4523 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4523 = module_4523_mod;
if (!module_4523) {
  const obj3 = { default: module_4523 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4523;
}
module_4523 = tmp7;
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
  const defaultResult2 = module_4262.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4523.default(date1)));
  return defaultResult1;
};
export default exports.default;