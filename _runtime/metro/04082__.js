// === Module 4082: ? ===

// Module 4082
import module_4071_mod from "module_4071" /* 4071 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_4071 = module_4071_mod;
if (!module_4071) {
  const obj = { default: module_4071 };
  let tmp3 = obj;
} else {
  tmp3 = module_4071;
}
module_4071 = tmp3;
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
  return module_4071.default(Date.now(), arg0);
};
export default exports.default;