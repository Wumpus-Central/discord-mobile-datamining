// === Module 4808: ? ===

// Module 4808
import module_4800_mod from "module_4800" /* 4800 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4800 = module_4800_mod;
if (!module_4800) {
  const obj = { default: module_4800 };
  let tmp3 = obj;
} else {
  tmp3 = module_4800;
}
module_4800 = tmp3;
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
  return module_4800.default(Date.now(), arg0);
};
export default exports.default;