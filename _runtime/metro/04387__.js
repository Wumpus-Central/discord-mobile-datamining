// === Module 4387: ? ===

// Module 4387
import module_3968_mod from "module_3968" /* 3968 */;
import _typeof_mod from "module_3964" /* 3964 */;
import module_4377_mod from "module_4377" /* 4377 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4377 = module_4377_mod;
if (!module_4377) {
  const obj3 = { default: module_4377 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4377;
}
module_4377 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3968.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4377.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;