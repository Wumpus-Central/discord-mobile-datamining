// === Module 3894: ? ===

// Module 3894
import module_3729_mod from "module_3729" /* 3729 */;
import module_3874_mod from "module_3874" /* 3874 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj2 = { default: module_3874 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3874;
}
module_3874 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3874.default(interval, 12 * module_3729.default(arg1));
};
export default exports.default;