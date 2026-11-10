// === Module 4785: ? ===

// Module 4785
import module_4777_mod from "module_4777" /* 4777 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4777 = module_4777_mod;
if (!module_4777) {
  const obj = { default: module_4777 };
  let tmp3 = obj;
} else {
  tmp3 = module_4777;
}
module_4777 = tmp3;
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
  return module_4777.default(arg0, Date.now());
};
export default exports.default;