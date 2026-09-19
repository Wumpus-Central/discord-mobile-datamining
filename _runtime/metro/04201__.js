// === Module 4201: ? ===

// Module 4201
import module_4190_mod from "module_4190" /* 4190 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4190 = module_4190_mod;
if (!module_4190) {
  const obj = { default: module_4190 };
  let tmp3 = obj;
} else {
  tmp3 = module_4190;
}
module_4190 = tmp3;
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
  return module_4190.default(Date.now(), arg0);
};
export default exports.default;