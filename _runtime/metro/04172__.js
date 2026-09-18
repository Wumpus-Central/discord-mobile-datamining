// === Module 4172: ? ===

// Module 4172
import module_4164_mod from "module_4164" /* 4164 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4164 = module_4164_mod;
if (!module_4164) {
  const obj = { default: module_4164 };
  let tmp3 = obj;
} else {
  tmp3 = module_4164;
}
module_4164 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4164.default(Date.now(), arg0);
};
export default exports.default;