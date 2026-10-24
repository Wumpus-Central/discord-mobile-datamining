// === Module 4617: ? ===

// Module 4617
import module_4609_mod from "module_4609" /* 4609 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4609 = module_4609_mod;
if (!module_4609) {
  const obj = { default: module_4609 };
  let tmp3 = obj;
} else {
  tmp3 = module_4609;
}
module_4609 = tmp3;
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
  return module_4609.default(arg0, Date.now());
};
export default exports.default;