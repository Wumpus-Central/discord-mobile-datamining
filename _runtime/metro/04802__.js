// === Module 4802: ? ===

// Module 4802
import module_4801_mod from "module_4801" /* 4801 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4801 = module_4801_mod;
if (!module_4801) {
  const obj = { default: module_4801 };
  let tmp3 = obj;
} else {
  tmp3 = module_4801;
}
module_4801 = tmp3;
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
  return Math.floor(module_4801.default(arg0) / 1000);
};
export default exports.default;