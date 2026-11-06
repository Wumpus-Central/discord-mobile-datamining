// === Module 4730: ? ===

// Module 4730
import module_4729_mod from "module_4729" /* 4729 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4729 = module_4729_mod;
if (!module_4729) {
  const obj = { default: module_4729 };
  let tmp3 = obj;
} else {
  tmp3 = module_4729;
}
module_4729 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4729.default(arg0) / 1000);
};
export default exports.default;