// === Module 4059: ? ===

// Module 4059
import module_3841 from "module_3841" /* 3841 */;
import module_3874 from "module_3874" /* 3874 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3841) {
  let obj = { default: module_3841 };
  let tmp3 = obj;
} else {
  tmp3 = module_3841;
}
module_3841 = tmp3;
if (!module_3874) {
  obj = { default: module_3874 };
  let tmp5 = obj;
} else {
  tmp5 = module_3874;
}
module_3874 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, module_3841.default(Date.now(), 1));
};
export default exports.default;