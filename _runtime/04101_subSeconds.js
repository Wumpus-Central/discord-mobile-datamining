// === Module 4101: subSeconds ===

// Module 4101 (subSeconds)
import module_3667 from "module_3667" /* 3667 */;
import module_3830 from "module_3830" /* 3830 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3830) {
  obj = { default: module_3830 };
  let tmp5 = obj;
} else {
  tmp5 = module_3830;
}
module_3830 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3830.default(arg0, -module_3667.default(arg1));
};
export default exports.default;