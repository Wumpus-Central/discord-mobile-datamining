// === Module 3881: ? ===

// Module 3881
import module_3729 from "module_3729" /* 3729 */;
import module_3882 from "module_3882" /* 3882 */;
import module_3885 from "module_3885" /* 3885 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3882) {
  obj = { default: module_3882 };
  let tmp5 = obj;
} else {
  tmp5 = module_3882;
}
module_3882 = tmp5;
if (!module_3885) {
  obj = { default: module_3885 };
  let tmp7 = obj;
} else {
  tmp7 = module_3885;
}
module_3885 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3885.default(arg0, module_3882.default(arg0) + module_3729.default(arg1));
};
export default exports.default;