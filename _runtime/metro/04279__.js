// === Module 4279: ? ===

// Module 4279
import module_4271_mod from "module_4271" /* 4271 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4271 = module_4271_mod;
if (!module_4271) {
  const obj = { default: module_4271 };
  let tmp3 = obj;
} else {
  tmp3 = module_4271;
}
module_4271 = tmp3;
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
  return module_4271.default(Date.now(), arg0);
};
export default exports.default;