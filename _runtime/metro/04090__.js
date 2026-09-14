// === Module 4090: ? ===

// Module 4090
import module_3906_mod from "module_3906" /* 3906 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3906 = module_3906_mod;
if (!module_3906) {
  const obj = { default: module_3906 };
  let tmp3 = obj;
} else {
  tmp3 = module_3906;
}
module_3906 = tmp3;
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
  return module_3906.default(arg0, Date.now());
};
export default exports.default;