// === Module 4841: ? ===

// Module 4841
import module_4426_mod from "module_4426" /* 4426 */;
import _typeof_mod from "module_4422" /* 4422 */;
import module_4570_mod from "module_4570" /* 4570 */;
import module_4693_mod from "module_4693" /* 4693 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4570 = module_4570_mod;
if (!module_4570) {
  const obj3 = { default: module_4570 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4570;
}
module_4570 = tmp7;
let module_4693 = module_4693_mod;
if (!module_4693) {
  const obj4 = { default: module_4693 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4693;
}
module_4693 = tmp9;
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
  return module_4570.default(defaultResult1, module_4426.default(arg1) - module_4693.default(defaultResult1));
};
export default exports.default;