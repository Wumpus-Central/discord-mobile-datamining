// === Module 4060: ? ===

// Module 4060
import module_3876 from "module_3876" /* 3876 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3876) {
  let obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, Date.now());
};
export default exports.default;