// === Module 3973: ? ===

// Module 3973
import module_3972 from "module_3972" /* 3972 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3972) {
  let obj = { default: module_3972 };
  let tmp3 = obj;
} else {
  tmp3 = module_3972;
}
module_3972 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3972.default(arg0) / 1000);
};
export default exports.default;