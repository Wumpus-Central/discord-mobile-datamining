// === Module 4367: ? ===

// Module 4367
import module_3952_mod from "module_3952" /* 3952 */;
import _typeof_mod from "module_3948" /* 3948 */;
import module_4096_mod from "module_4096" /* 4096 */;
import module_4219_mod from "module_4219" /* 4219 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4096 = module_4096_mod;
if (!module_4096) {
  const obj3 = { default: module_4096 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4096;
}
module_4096 = tmp7;
let module_4219 = module_4219_mod;
if (!module_4219) {
  const obj4 = { default: module_4219 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4219;
}
module_4219 = tmp9;
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
  return module_4096.default(defaultResult1, module_3952.default(arg1) - module_4219.default(defaultResult1));
};
export default exports.default;