// === Module 4063: ? ===

// Module 4063
import module_3874 from "module_3874" /* 3874 */;
import subDays from "subDays" /* 4064 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3874) {
  let obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
if (!subDays) {
  obj = { default: subDays };
  let tmp5 = obj;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;