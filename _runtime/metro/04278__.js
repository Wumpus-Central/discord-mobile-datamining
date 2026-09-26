// === Module 4278: ? ===

// Module 4278
import module_4270_mod from "module_4270" /* 4270 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4270 = module_4270_mod;
if (!module_4270) {
  const obj = { default: module_4270 };
  let tmp3 = obj;
} else {
  tmp3 = module_4270;
}
module_4270 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4270.default(Date.now(), arg0);
};
export default exports.default;