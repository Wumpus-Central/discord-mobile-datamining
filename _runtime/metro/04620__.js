// === Module 4620: ? ===

// Module 4620
import module_4402_mod from "module_4402" /* 4402 */;
import module_4435_mod from "module_4435" /* 4435 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj = { default: module_4402 };
  let tmp3 = obj;
} else {
  tmp3 = module_4402;
}
module_4402 = tmp3;
let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj2 = { default: module_4435 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4435;
}
module_4435 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4435.default(arg0, module_4402.default(Date.now(), 1));
};
export default exports.default;