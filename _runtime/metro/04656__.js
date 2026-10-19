// === Module 4656: ? ===

// Module 4656
import module_4512_mod from "module_4512" /* 4512 */;
import _typeof_mod from "module_4231" /* 4231 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;
import module_4235_mod from "module_4235" /* 4235 */;

let module_4512 = module_4512_mod;
if (!module_4512) {
  const obj = { default: module_4512 };
  let tmp3 = obj;
} else {
  tmp3 = module_4512;
}
module_4512 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj4 = { default: module_4235 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4235;
}
module_4235 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4512.default(defaultResult1, arg2) - module_4235.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;