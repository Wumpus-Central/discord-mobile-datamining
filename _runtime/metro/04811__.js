// === Module 4811: ? ===

// Module 4811
import module_4803_mod from "module_4803" /* 4803 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4803 = module_4803_mod;
if (!module_4803) {
  const obj = { default: module_4803 };
  let tmp3 = obj;
} else {
  tmp3 = module_4803;
}
module_4803 = tmp3;
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
  return module_4803.default(Date.now(), arg0);
};
export default exports.default;