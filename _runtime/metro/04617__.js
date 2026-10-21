// === Module 4617: ? ===

// Module 4617
import module_4433_mod from "module_4433" /* 4433 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4433 = module_4433_mod;
if (!module_4433) {
  const obj = { default: module_4433 };
  let tmp3 = obj;
} else {
  tmp3 = module_4433;
}
module_4433 = tmp3;
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
  return module_4433.default(arg0, Date.now());
};
export default exports.default;