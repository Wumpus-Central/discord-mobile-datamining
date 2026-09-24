// === Module 4271: ? ===

// Module 4271
import module_4263_mod from "module_4263" /* 4263 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4263 = module_4263_mod;
if (!module_4263) {
  const obj = { default: module_4263 };
  let tmp3 = obj;
} else {
  tmp3 = module_4263;
}
module_4263 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4263.default(Date.now(), arg0);
};
export default exports.default;