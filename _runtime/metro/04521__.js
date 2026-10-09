// === Module 4521: ? ===

// Module 4521
import module_4513_mod from "module_4513" /* 4513 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4513 = module_4513_mod;
if (!module_4513) {
  const obj = { default: module_4513 };
  let tmp3 = obj;
} else {
  tmp3 = module_4513;
}
module_4513 = tmp3;
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
  return module_4513.default(arg0, Date.now());
};
export default exports.default;