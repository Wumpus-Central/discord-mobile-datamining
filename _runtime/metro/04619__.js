// === Module 4619: ? ===

// Module 4619
import module_4611_mod from "module_4611" /* 4611 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4611 = module_4611_mod;
if (!module_4611) {
  const obj = { default: module_4611 };
  let tmp3 = obj;
} else {
  tmp3 = module_4611;
}
module_4611 = tmp3;
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
  return module_4611.default(Date.now(), arg0);
};
export default exports.default;