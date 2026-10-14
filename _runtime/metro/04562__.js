// === Module 4562: ? ===

// Module 4562
import module_4554_mod from "module_4554" /* 4554 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4554 = module_4554_mod;
if (!module_4554) {
  const obj = { default: module_4554 };
  let tmp3 = obj;
} else {
  tmp3 = module_4554;
}
module_4554 = tmp3;
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
  return module_4554.default(Date.now(), arg0);
};
export default exports.default;