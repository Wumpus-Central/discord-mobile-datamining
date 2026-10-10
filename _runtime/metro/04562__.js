// === Module 4562: ? ===

// Module 4562
import module_4554_mod from "module_4554" /* 4554 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

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

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4554.default(arg0, Date.now());
};
export default exports.default;