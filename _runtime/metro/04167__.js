// === Module 4167: ? ===

// Module 4167
import module_4156_mod from "module_4156" /* 4156 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4156 = module_4156_mod;
if (!module_4156) {
  const obj = { default: module_4156 };
  let tmp3 = obj;
} else {
  tmp3 = module_4156;
}
module_4156 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4156.default(Date.now(), arg0);
};
export default exports.default;