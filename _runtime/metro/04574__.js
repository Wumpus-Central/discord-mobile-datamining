// === Module 4574: ? ===

// Module 4574
import module_4573_mod from "module_4573" /* 4573 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4573 = module_4573_mod;
if (!module_4573) {
  const obj = { default: module_4573 };
  let tmp3 = obj;
} else {
  tmp3 = module_4573;
}
module_4573 = tmp3;
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
  return Math.floor(module_4573.default(arg0) / 1000);
};
export default exports.default;