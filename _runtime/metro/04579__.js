// === Module 4579: ? ===

// Module 4579
import module_4160_mod from "module_4160" /* 4160 */;
import _typeof_mod from "module_4156" /* 4156 */;
import module_4569_mod from "module_4569" /* 4569 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj3 = { default: module_4569 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4569;
}
module_4569 = tmp7;
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
  const diff = module_4160.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4569.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;