// === Module 4654: ? ===

// Module 4654
import module_4646_mod from "module_4646" /* 4646 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4646 = module_4646_mod;
if (!module_4646) {
  const obj = { default: module_4646 };
  let tmp3 = obj;
} else {
  tmp3 = module_4646;
}
module_4646 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4646.default(Date.now(), arg0);
};
export default exports.default;