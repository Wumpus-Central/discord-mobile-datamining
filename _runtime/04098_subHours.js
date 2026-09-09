// === Module 4098: subHours ===

// Module 4098 (subHours)
import module_3817 from "module_3817" /* 3817 */;
import requiredArgs from "requiredArgs" /* 3664 */;
import module_3667 from "module_3667" /* 3667 */;

if (!module_3817) {
  let obj = { default: module_3817 };
  let tmp3 = obj;
} else {
  tmp3 = module_3817;
}
module_3817 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3817.default(arg0, -module_3667.default(arg1));
};
export default exports.default;