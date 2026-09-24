// === Module 4278: ? ===

// Module 4278
import module_4094_mod from "module_4094" /* 4094 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4094 = module_4094_mod;
if (!module_4094) {
  const obj = { default: module_4094 };
  let tmp3 = obj;
} else {
  tmp3 = module_4094;
}
module_4094 = tmp3;
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
  return module_4094.default(arg0, Date.now());
};
export default exports.default;