// === Module 4568: ? ===

// Module 4568
import module_4567_mod from "module_4567" /* 4567 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4567 = module_4567_mod;
if (!module_4567) {
  const obj = { default: module_4567 };
  let tmp3 = obj;
} else {
  tmp3 = module_4567;
}
module_4567 = tmp3;
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
  return Math.floor(module_4567.default(arg0) / 1000);
};
export default exports.default;