// === Module 4713: ? ===

// Module 4713
import module_4298_mod from "module_4298" /* 4298 */;
import _typeof_mod from "module_4294" /* 4294 */;
import module_4442_mod from "module_4442" /* 4442 */;
import module_4565_mod from "module_4565" /* 4565 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj3 = { default: module_4442 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4442;
}
module_4442 = tmp7;
let module_4565 = module_4565_mod;
if (!module_4565) {
  const obj4 = { default: module_4565 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4565;
}
module_4565 = tmp9;
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
  return module_4442.default(defaultResult1, module_4298.default(arg1) - module_4565.default(defaultResult1));
};
export default exports.default;