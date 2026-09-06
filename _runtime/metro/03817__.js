// === Module 3817: ? ===

// Module 3817
import module_3654 from "module_3654" /* 3654 */;
import module_3805 from "module_3805" /* 3805 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3805) {
  obj = { default: module_3805 };
  let tmp5 = obj;
} else {
  tmp5 = module_3805;
}
module_3805 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3805.default(interval, 1000 * module_3654.default(arg1));
};
export default exports.default;