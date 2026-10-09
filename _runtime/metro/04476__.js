// === Module 4476: ? ===

// Module 4476
import module_4162_mod from "module_4162" /* 4162 */;
import _typeof_mod from "module_4158" /* 4158 */;
import module_4398_mod from "module_4398" /* 4398 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4398 = module_4398_mod;
if (!module_4398) {
  const obj3 = { default: module_4398 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4398;
}
module_4398 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4398.default(defaultResult1, arg2) - module_4162.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;