// === Module 4609: ? ===

// Module 4609
import module_4293_mod from "module_4293" /* 4293 */;
import _typeof_mod from "module_4289" /* 4289 */;
import module_4525_mod from "module_4525" /* 4525 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4525 = module_4525_mod;
if (!module_4525) {
  const obj3 = { default: module_4525 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4525;
}
module_4525 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4525.default(defaultResult1) - module_4293.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;