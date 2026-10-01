// === Module 4310: ? ===

// Module 4310
import module_4302_mod from "module_4302" /* 4302 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4302 = module_4302_mod;
if (!module_4302) {
  const obj = { default: module_4302 };
  let tmp3 = obj;
} else {
  tmp3 = module_4302;
}
module_4302 = tmp3;
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
  return module_4302.default(arg0, Date.now());
};
export default exports.default;