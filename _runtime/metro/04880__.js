// === Module 4880: ? ===

// Module 4880
import module_4872_mod from "module_4872" /* 4872 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4872 = module_4872_mod;
if (!module_4872) {
  const obj = { default: module_4872 };
  let tmp3 = obj;
} else {
  tmp3 = module_4872;
}
module_4872 = tmp3;
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
  return module_4872.default(Date.now(), arg0);
};
export default exports.default;