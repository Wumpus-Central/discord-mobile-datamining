// === Module 4691: subMinutes ===

// Module 4691 (subMinutes)
import module_4420_mod from "module_4420" /* 4420 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import module_4259_mod from "module_4259" /* 4259 */;

let module_4420 = module_4420_mod;
if (!module_4420) {
  const obj = { default: module_4420 };
  let tmp3 = obj;
} else {
  tmp3 = module_4420;
}
module_4420 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj3 = { default: module_4259 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4259;
}
module_4259 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4420.default(arg0, -module_4259.default(arg1));
};
export default exports.default;