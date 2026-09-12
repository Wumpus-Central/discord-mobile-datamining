// === Module 4095: ? ===

// Module 4095
import module_3906 from "module_3906" /* 3906 */;
import subDays from "subDays" /* 4096 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3906) {
  let obj = { default: module_3906 };
  let tmp3 = obj;
} else {
  tmp3 = module_3906;
}
module_3906 = tmp3;
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
  return module_3906.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;