// === Module 4052: ? ===

// Module 4052
import module_4044 from "module_4044" /* 4044 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_4044) {
  let obj = { default: module_4044 };
  let tmp3 = obj;
} else {
  tmp3 = module_4044;
}
module_4044 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4044.default(Date.now(), arg0);
};
export default exports.default;