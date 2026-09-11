// === Module 3851: ? ===

// Module 3851
import module_3699 from "module_3699" /* 3699 */;
import module_3852 from "module_3852" /* 3852 */;
import module_3855 from "module_3855" /* 3855 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3852) {
  obj = { default: module_3852 };
  let tmp5 = obj;
} else {
  tmp5 = module_3852;
}
module_3852 = tmp5;
if (!module_3855) {
  obj = { default: module_3855 };
  let tmp7 = obj;
} else {
  tmp7 = module_3855;
}
module_3855 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3855.default(arg0, module_3852.default(arg0) + module_3699.default(arg1));
};
export default exports.default;