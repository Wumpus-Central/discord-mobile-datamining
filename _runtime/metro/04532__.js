// === Module 4532: ? ===

// Module 4532
import module_4531_mod from "module_4531" /* 4531 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4531 = module_4531_mod;
if (!module_4531) {
  const obj = { default: module_4531 };
  let tmp3 = obj;
} else {
  tmp3 = module_4531;
}
module_4531 = tmp3;
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
  return Math.floor(module_4531.default(arg0) / 1000);
};
export default exports.default;