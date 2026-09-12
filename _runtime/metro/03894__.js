// === Module 3894: ? ===

// Module 3894
import module_3729 from "module_3729" /* 3729 */;
import module_3874 from "module_3874" /* 3874 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3874) {
  obj = { default: module_3874 };
  let tmp5 = obj;
} else {
  tmp5 = module_3874;
}
module_3874 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3874.default(interval, 12 * module_3729.default(arg1));
};
export default exports.default;