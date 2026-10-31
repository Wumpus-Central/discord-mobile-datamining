// === Module 4652: ? ===

// Module 4652
import module_4644_mod from "module_4644" /* 4644 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4644 = module_4644_mod;
if (!module_4644) {
  const obj = { default: module_4644 };
  let tmp3 = obj;
} else {
  tmp3 = module_4644;
}
module_4644 = tmp3;
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
  return module_4644.default(Date.now(), arg0);
};
export default exports.default;