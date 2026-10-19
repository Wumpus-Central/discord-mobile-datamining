// === Module 4587: ? ===

// Module 4587
import module_4576_mod from "module_4576" /* 4576 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4576 = module_4576_mod;
if (!module_4576) {
  const obj = { default: module_4576 };
  let tmp3 = obj;
} else {
  tmp3 = module_4576;
}
module_4576 = tmp3;
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
  return module_4576.default(Date.now(), arg0);
};
export default exports.default;