// === Module 4654: ? ===

// Module 4654
import module_4470_mod from "module_4470" /* 4470 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4470 = module_4470_mod;
if (!module_4470) {
  const obj = { default: module_4470 };
  let tmp3 = obj;
} else {
  tmp3 = module_4470;
}
module_4470 = tmp3;
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
  return module_4470.default(arg0, Date.now());
};
export default exports.default;