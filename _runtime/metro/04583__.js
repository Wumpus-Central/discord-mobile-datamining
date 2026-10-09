// === Module 4583: ? ===

// Module 4583
import module_4439_mod from "module_4439" /* 4439 */;
import _typeof_mod from "module_4158" /* 4158 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;
import module_4162_mod from "module_4162" /* 4162 */;

let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj = { default: module_4439 };
  let tmp3 = obj;
} else {
  tmp3 = module_4439;
}
module_4439 = tmp3;
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
let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj4 = { default: module_4162 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4162;
}
module_4162 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4439.default(defaultResult1, arg2) - module_4162.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;