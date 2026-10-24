// === Module 4610: ? ===

// Module 4610
import module_4599_mod from "module_4599" /* 4599 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4599 = module_4599_mod;
if (!module_4599) {
  const obj = { default: module_4599 };
  let tmp3 = obj;
} else {
  tmp3 = module_4599;
}
module_4599 = tmp3;
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
  return module_4599.default(Date.now(), arg0);
};
export default exports.default;