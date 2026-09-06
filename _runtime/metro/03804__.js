// === Module 3804: ? ===

// Module 3804
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
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3805.default(interval, module_3654.default(arg1) * c3);
};
export default exports.default;