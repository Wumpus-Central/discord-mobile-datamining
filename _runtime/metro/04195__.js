// === Module 4195: ? ===

// Module 4195
import module_4194_mod from "module_4194" /* 4194 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4194 = module_4194_mod;
if (!module_4194) {
  const obj = { default: module_4194 };
  let tmp3 = obj;
} else {
  tmp3 = module_4194;
}
module_4194 = tmp3;
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
  return Math.floor(module_4194.default(arg0) / 1000);
};
export default exports.default;