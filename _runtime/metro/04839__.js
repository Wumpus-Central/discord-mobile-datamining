// === Module 4839: ? ===

// Module 4839
import module_4424_mod from "module_4424" /* 4424 */;
import _typeof_mod from "module_4420" /* 4420 */;
import module_4568_mod from "module_4568" /* 4568 */;
import module_4691_mod from "module_4691" /* 4691 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj = { default: module_4424 };
  let tmp3 = obj;
} else {
  tmp3 = module_4424;
}
module_4424 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj3 = { default: module_4568 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4568;
}
module_4568 = tmp7;
let module_4691 = module_4691_mod;
if (!module_4691) {
  const obj4 = { default: module_4691 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4691;
}
module_4691 = tmp9;
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
  return module_4568.default(defaultResult1, module_4424.default(arg1) - module_4691.default(defaultResult1));
};
export default exports.default;