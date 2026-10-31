// === Module 4653: ? ===

// Module 4653
import module_4645_mod from "module_4645" /* 4645 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4645 = module_4645_mod;
if (!module_4645) {
  const obj = { default: module_4645 };
  let tmp3 = obj;
} else {
  tmp3 = module_4645;
}
module_4645 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4645.default(Date.now(), arg0);
};
export default exports.default;