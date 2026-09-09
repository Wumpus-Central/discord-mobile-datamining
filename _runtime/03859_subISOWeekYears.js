// === Module 3859: subISOWeekYears ===

// Module 3859 (subISOWeekYears)
import module_3819 from "module_3819" /* 3819 */;
import requiredArgs from "requiredArgs" /* 3664 */;
import module_3667 from "module_3667" /* 3667 */;

if (!module_3819) {
  let obj = { default: module_3819 };
  let tmp3 = obj;
} else {
  tmp3 = module_3819;
}
module_3819 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3667) {
  obj = { default: module_3667 };
  let tmp7 = obj;
} else {
  tmp7 = module_3667;
}
module_3667 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3819.default(arg0, -module_3667.default(arg1));
};
export default exports.default;