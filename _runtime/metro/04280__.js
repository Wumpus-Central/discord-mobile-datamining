// === Module 4280: ? ===

// Module 4280
import module_4096_mod from "module_4096" /* 4096 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4096 = module_4096_mod;
if (!module_4096) {
  const obj = { default: module_4096 };
  let tmp3 = obj;
} else {
  tmp3 = module_4096;
}
module_4096 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4096.default(arg0, Date.now());
};
export default exports.default;