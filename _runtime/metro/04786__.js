// === Module 4786: ? ===

// Module 4786
import module_4778_mod from "module_4778" /* 4778 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4778 = module_4778_mod;
if (!module_4778) {
  const obj = { default: module_4778 };
  let tmp3 = obj;
} else {
  tmp3 = module_4778;
}
module_4778 = tmp3;
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
  return module_4778.default(arg0, Date.now());
};
export default exports.default;