// === Module 4618: ? ===

// Module 4618
import module_4203_mod from "module_4203" /* 4203 */;
import _typeof_mod from "module_4199" /* 4199 */;
import module_4347_mod from "module_4347" /* 4347 */;
import module_4470_mod from "module_4470" /* 4470 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4347 = module_4347_mod;
if (!module_4347) {
  const obj3 = { default: module_4347 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4347;
}
module_4347 = tmp7;
let module_4470 = module_4470_mod;
if (!module_4470) {
  const obj4 = { default: module_4470 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4470;
}
module_4470 = tmp9;
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
  return module_4347.default(defaultResult1, module_4203.default(arg1) - module_4470.default(defaultResult1));
};
export default exports.default;