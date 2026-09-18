// === Module 4230: ? ===

// Module 4230
import module_3815_mod from "module_3815" /* 3815 */;
import _typeof_mod from "module_3811" /* 3811 */;
import module_3959_mod from "module_3959" /* 3959 */;
import module_4082_mod from "module_4082" /* 4082 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3959 = module_3959_mod;
if (!module_3959) {
  const obj3 = { default: module_3959 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3959;
}
module_3959 = tmp7;
let module_4082 = module_4082_mod;
if (!module_4082) {
  const obj4 = { default: module_4082 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4082;
}
module_4082 = tmp9;
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
  return module_3959.default(defaultResult1, module_3815.default(arg1) - module_4082.default(defaultResult1));
};
export default exports.default;