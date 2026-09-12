// === Module 3892: ? ===

// Module 3892
import module_3729 from "module_3729" /* 3729 */;
import module_3880 from "module_3880" /* 3880 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3880) {
  obj = { default: module_3880 };
  let tmp5 = obj;
} else {
  tmp5 = module_3880;
}
module_3880 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3880.default(interval, 1000 * module_3729.default(arg1));
};
export default exports.default;