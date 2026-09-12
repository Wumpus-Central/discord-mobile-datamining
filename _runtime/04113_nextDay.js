// === Module 4113: nextDay ===

// Module 4113 (nextDay)
import module_3873 from "module_3873" /* 3873 */;
import module_3988 from "module_3988" /* 3988 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3873) {
  let obj = { default: module_3873 };
  let tmp3 = obj;
} else {
  tmp3 = module_3873;
}
module_3873 = tmp3;
if (!module_3988) {
  obj = { default: module_3988 };
  let tmp5 = obj;
} else {
  tmp5 = module_3988;
}
module_3988 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3988.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3873.default(arg0, sum);
};
export default exports.default;