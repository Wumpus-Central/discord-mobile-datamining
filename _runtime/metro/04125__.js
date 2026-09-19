// === Module 4125: ? ===

// Module 4125
import module_4124_mod from "module_4124" /* 4124 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4124 = module_4124_mod;
if (!module_4124) {
  const obj = { default: module_4124 };
  let tmp3 = obj;
} else {
  tmp3 = module_4124;
}
module_4124 = tmp3;
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
  return Math.floor(module_4124.default(arg0) / 1000);
};
export default exports.default;