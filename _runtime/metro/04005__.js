// === Module 4005: ? ===

// Module 4005
import module_4004_mod from "module_4004" /* 4004 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_4004 = module_4004_mod;
if (!module_4004) {
  const obj = { default: module_4004 };
  let tmp3 = obj;
} else {
  tmp3 = module_4004;
}
module_4004 = tmp3;
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
  return Math.floor(module_4004.default(arg0) / 1000);
};
export default exports.default;