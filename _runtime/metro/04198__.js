// === Module 4198: ? ===

// Module 4198
import module_4197_mod from "module_4197" /* 4197 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4197 = module_4197_mod;
if (!module_4197) {
  const obj = { default: module_4197 };
  let tmp3 = obj;
} else {
  tmp3 = module_4197;
}
module_4197 = tmp3;
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
  return Math.floor(module_4197.default(arg0) / 1000);
};
export default exports.default;