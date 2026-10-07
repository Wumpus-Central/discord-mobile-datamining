// === Module 4389: ? ===

// Module 4389
import module_4245_mod from "module_4245" /* 4245 */;
import _typeof_mod from "module_3964" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import module_3968_mod from "module_3968" /* 3968 */;

let module_4245 = module_4245_mod;
if (!module_4245) {
  const obj = { default: module_4245 };
  let tmp3 = obj;
} else {
  tmp3 = module_4245;
}
module_4245 = tmp3;
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
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj4 = { default: module_3968 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3968;
}
module_3968 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4245.default(defaultResult1, arg2) - module_3968.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;