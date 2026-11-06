// === Module 4869: ? ===

// Module 4869
import module_4454_mod from "module_4454" /* 4454 */;
import _typeof_mod from "module_4450" /* 4450 */;
import module_4598_mod from "module_4598" /* 4598 */;
import module_4721_mod from "module_4721" /* 4721 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4598 = module_4598_mod;
if (!module_4598) {
  const obj3 = { default: module_4598 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4598;
}
module_4598 = tmp7;
let module_4721 = module_4721_mod;
if (!module_4721) {
  const obj4 = { default: module_4721 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4721;
}
module_4721 = tmp9;
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
  return module_4598.default(defaultResult1, module_4454.default(arg1) - module_4721.default(defaultResult1));
};
export default exports.default;