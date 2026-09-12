// === Module 4162: subQuarters ===

// Module 4162 (subQuarters)
import module_3729 from "module_3729" /* 3729 */;
import module_3891 from "module_3891" /* 3891 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3891) {
  obj = { default: module_3891 };
  let tmp5 = obj;
} else {
  tmp5 = module_3891;
}
module_3891 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3891.default(arg0, -module_3729.default(arg1));
};
export default exports.default;