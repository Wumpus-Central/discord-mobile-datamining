// === Module 4677: ? ===

// Module 4677
import module_4262_mod from "module_4262" /* 4262 */;
import _typeof_mod from "module_4258" /* 4258 */;
import module_4406_mod from "module_4406" /* 4406 */;
import module_4529_mod from "module_4529" /* 4529 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj3 = { default: module_4406 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4406;
}
module_4406 = tmp7;
let module_4529 = module_4529_mod;
if (!module_4529) {
  const obj4 = { default: module_4529 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4529;
}
module_4529 = tmp9;
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
  return module_4406.default(defaultResult1, module_4262.default(arg1) - module_4529.default(defaultResult1));
};
export default exports.default;