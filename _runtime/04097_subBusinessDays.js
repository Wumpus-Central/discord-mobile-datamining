// === Module 4097: subBusinessDays ===

// Module 4097 (subBusinessDays)
import module_3813 from "module_3813" /* 3813 */;
import requiredArgs from "requiredArgs" /* 3664 */;
import module_3667 from "module_3667" /* 3667 */;

if (!module_3813) {
  let obj = { default: module_3813 };
  let tmp3 = obj;
} else {
  tmp3 = module_3813;
}
module_3813 = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3813.default(arg0, -module_3667.default(arg1));
};
export default exports.default;