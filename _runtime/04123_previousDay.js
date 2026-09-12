// === Module 4123: previousDay ===

// Module 4123 (previousDay)
import requiredArgs from "requiredArgs" /* 3726 */;
import module_3988 from "module_3988" /* 3988 */;
import subDays from "subDays" /* 4096 */;

if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!module_3988) {
  obj = { default: module_3988 };
  let tmp5 = obj;
} else {
  tmp5 = module_3988;
}
module_3988 = tmp5;
if (!subDays) {
  obj = { default: subDays };
  let tmp7 = obj;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_3988.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;