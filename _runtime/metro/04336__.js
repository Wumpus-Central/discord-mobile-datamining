// === Module 4336: ? ===

// Module 4336
import module_3917_mod from "module_3917" /* 3917 */;
import _typeof_mod from "module_3913" /* 3913 */;
import module_4326_mod from "module_4326" /* 4326 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4326 = module_4326_mod;
if (!module_4326) {
  const obj3 = { default: module_4326 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4326;
}
module_4326 = tmp7;
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
  const diff = module_3917.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4326.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;