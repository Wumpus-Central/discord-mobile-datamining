// === Module 3828: ? ===

// Module 3828
import module_3667 from "module_3667" /* 3667 */;
import module_3818 from "module_3818" /* 3818 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3818) {
  obj = { default: module_3818 };
  let tmp5 = obj;
} else {
  tmp5 = module_3818;
}
module_3818 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(interval, module_3667.default(arg1) * c3);
};
export default exports.default;