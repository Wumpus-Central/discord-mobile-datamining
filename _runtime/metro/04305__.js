// === Module 4305: ? ===

// Module 4305
import module_4295_mod from "module_4295" /* 4295 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4295 = module_4295_mod;
if (!module_4295) {
  const obj = { default: module_4295 };
  let tmp3 = obj;
} else {
  tmp3 = module_4295;
}
module_4295 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4295.default(arg0, Date.now());
};
export default exports.default;