// === Module 4034: subDays ===

// Module 4034 (subDays)
import module_3811 from "module_3811" /* 3811 */;
import requiredArgs from "requiredArgs" /* 3664 */;
import module_3667 from "module_3667" /* 3667 */;

if (!module_3811) {
  let obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
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

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3811.default(arg0, -module_3667.default(arg1));
};
export default exports.default;