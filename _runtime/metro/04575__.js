// === Module 4575: ? ===

// Module 4575
import module_4160_mod from "module_4160" /* 4160 */;
import _typeof_mod from "module_4156" /* 4156 */;
import module_4304_mod from "module_4304" /* 4304 */;
import module_4427_mod from "module_4427" /* 4427 */;
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
let module_4304 = module_4304_mod;
if (!module_4304) {
  const obj3 = { default: module_4304 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4304;
}
module_4304 = tmp7;
let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj4 = { default: module_4427 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4427;
}
module_4427 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4304.default(defaultResult1, module_4160.default(arg1) - module_4427.default(defaultResult1));
};
export default exports.default;