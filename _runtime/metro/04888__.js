// === Module 4888: ? ===

// Module 4888
import module_4670_mod from "module_4670" /* 4670 */;
import module_4703_mod from "module_4703" /* 4703 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4670 = module_4670_mod;
if (!module_4670) {
  const obj = { default: module_4670 };
  let tmp3 = obj;
} else {
  tmp3 = module_4670;
}
module_4670 = tmp3;
let module_4703 = module_4703_mod;
if (!module_4703) {
  const obj2 = { default: module_4703 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4703;
}
module_4703 = tmp5;
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
  return module_4703.default(arg0, module_4670.default(Date.now(), 1));
};
export default exports.default;