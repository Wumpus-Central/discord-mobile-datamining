// === Module 3896: subMilliseconds ===

// Module 3896 (subMilliseconds)
import module_3818 from "module_3818" /* 3818 */;
import requiredArgs from "requiredArgs" /* 3664 */;
import module_3667 from "module_3667" /* 3667 */;

if (!module_3818) {
  let obj = { default: module_3818 };
  let tmp3 = obj;
} else {
  tmp3 = module_3818;
}
module_3818 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(arg0, -module_3667.default(arg1));
};
export default exports.default;