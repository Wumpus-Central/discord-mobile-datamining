// === Module 4613: ? ===

// Module 4613
import module_4605_mod from "module_4605" /* 4605 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4605 = module_4605_mod;
if (!module_4605) {
  const obj = { default: module_4605 };
  let tmp3 = obj;
} else {
  tmp3 = module_4605;
}
module_4605 = tmp3;
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
  return module_4605.default(Date.now(), arg0);
};
export default exports.default;