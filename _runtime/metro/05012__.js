// === Module 5012: ? ===

// Module 5012
import module_4593_mod from "module_4593" /* 4593 */;
import _typeof_mod from "module_4589" /* 4589 */;
import module_5002_mod from "module_5002" /* 5002 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_5002 = module_5002_mod;
if (!module_5002) {
  const obj3 = { default: module_5002 };
  let tmp7 = obj3;
} else {
  tmp7 = module_5002;
}
module_5002 = tmp7;
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
  const diff = module_4593.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_5002.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;