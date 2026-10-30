// === Module 4569: ? ===

// Module 4569
import module_4568_mod from "module_4568" /* 4568 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj = { default: module_4568 };
  let tmp3 = obj;
} else {
  tmp3 = module_4568;
}
module_4568 = tmp3;
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
  return Math.floor(module_4568.default(arg0) / 1000);
};
export default exports.default;