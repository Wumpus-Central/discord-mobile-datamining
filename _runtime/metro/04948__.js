// === Module 4948: ? ===

// Module 4948
import module_4940_mod from "module_4940" /* 4940 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4940 = module_4940_mod;
if (!module_4940) {
  const obj = { default: module_4940 };
  let tmp3 = obj;
} else {
  tmp3 = module_4940;
}
module_4940 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4940.default(Date.now(), arg0);
};
export default exports.default;