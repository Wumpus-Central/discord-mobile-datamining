// === Module 4058: ? ===

// Module 4058
import module_4050 from "module_4050" /* 4050 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_4050) {
  let obj = { default: module_4050 };
  let tmp3 = obj;
} else {
  tmp3 = module_4050;
}
module_4050 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4050.default(arg0, Date.now());
};
export default exports.default;