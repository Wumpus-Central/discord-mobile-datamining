// === Module 4883: ? ===

// Module 4883
import module_4875_mod from "module_4875" /* 4875 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4875 = module_4875_mod;
if (!module_4875) {
  const obj = { default: module_4875 };
  let tmp3 = obj;
} else {
  tmp3 = module_4875;
}
module_4875 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4875.default(Date.now(), arg0);
};
export default exports.default;