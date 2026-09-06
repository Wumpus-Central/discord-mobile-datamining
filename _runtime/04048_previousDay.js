// === Module 4048: previousDay ===

// Module 4048 (previousDay)
import requiredArgs from "requiredArgs" /* 3651 */;
import module_3913 from "module_3913" /* 3913 */;
import subDays from "subDays" /* 4021 */;

if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!module_3913) {
  obj = { default: module_3913 };
  let tmp5 = obj;
} else {
  tmp5 = module_3913;
}
module_3913 = tmp5;
if (!subDays) {
  obj = { default: subDays };
  let tmp7 = obj;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_3913.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;