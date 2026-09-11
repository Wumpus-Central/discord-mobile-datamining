// === Module 4065: ? ===

// Module 4065
import module_3876 from "module_3876" /* 3876 */;
import subDays from "subDays" /* 4066 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3876) {
  let obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
if (!subDays) {
  obj = { default: subDays };
  let tmp5 = obj;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;