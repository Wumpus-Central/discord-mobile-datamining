// === Module 4809: ? ===

// Module 4809
import module_4801_mod from "module_4801" /* 4801 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4801 = module_4801_mod;
if (!module_4801) {
  const obj = { default: module_4801 };
  let tmp3 = obj;
} else {
  tmp3 = module_4801;
}
module_4801 = tmp3;
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
  return module_4801.default(Date.now(), arg0);
};
export default exports.default;