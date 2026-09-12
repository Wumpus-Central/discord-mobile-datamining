// === Module 3958: subMilliseconds ===

// Module 3958 (subMilliseconds)
import module_3880 from "module_3880" /* 3880 */;
import requiredArgs from "requiredArgs" /* 3726 */;
import module_3729 from "module_3729" /* 3729 */;

if (!module_3880) {
  let obj = { default: module_3880 };
  let tmp3 = obj;
} else {
  tmp3 = module_3880;
}
module_3880 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3729) {
  obj = { default: module_3729 };
  let tmp7 = obj;
} else {
  tmp7 = module_3729;
}
module_3729 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3880.default(arg0, -module_3729.default(arg1));
};
export default exports.default;