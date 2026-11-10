// === Module 4778: ? ===

// Module 4778
import module_4767_mod from "module_4767" /* 4767 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4767 = module_4767_mod;
if (!module_4767) {
  const obj = { default: module_4767 };
  let tmp3 = obj;
} else {
  tmp3 = module_4767;
}
module_4767 = tmp3;
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
  return module_4767.default(Date.now(), arg0);
};
export default exports.default;