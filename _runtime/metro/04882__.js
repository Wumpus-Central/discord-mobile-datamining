// === Module 4882: ? ===

// Module 4882
import module_4874_mod from "module_4874" /* 4874 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4874 = module_4874_mod;
if (!module_4874) {
  const obj = { default: module_4874 };
  let tmp3 = obj;
} else {
  tmp3 = module_4874;
}
module_4874 = tmp3;
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
  return module_4874.default(Date.now(), arg0);
};
export default exports.default;