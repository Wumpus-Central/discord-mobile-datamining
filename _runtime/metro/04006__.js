// === Module 4006: ? ===

// Module 4006
import module_4005_mod from "module_4005" /* 4005 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_4005 = module_4005_mod;
if (!module_4005) {
  const obj = { default: module_4005 };
  let tmp3 = obj;
} else {
  tmp3 = module_4005;
}
module_4005 = tmp3;
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
  return Math.floor(module_4005.default(arg0) / 1000);
};
export default exports.default;