// === Module 4946: ? ===

// Module 4946
import module_4936_mod from "module_4936" /* 4936 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4936 = module_4936_mod;
if (!module_4936) {
  const obj = { default: module_4936 };
  let tmp3 = obj;
} else {
  tmp3 = module_4936;
}
module_4936 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4936.default(arg0, Date.now());
};
export default exports.default;