// === Module 4318: ? ===

// Module 4318
import module_4310_mod from "module_4310" /* 4310 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4310 = module_4310_mod;
if (!module_4310) {
  const obj = { default: module_4310 };
  let tmp3 = obj;
} else {
  tmp3 = module_4310;
}
module_4310 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4310.default(Date.now(), arg0);
};
export default exports.default;