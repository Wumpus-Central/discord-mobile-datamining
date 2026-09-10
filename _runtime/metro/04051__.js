// === Module 4051: ? ===

// Module 4051
import module_4043 from "module_4043" /* 4043 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_4043) {
  let obj = { default: module_4043 };
  let tmp3 = obj;
} else {
  tmp3 = module_4043;
}
module_4043 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4043.default(Date.now(), arg0);
};
export default exports.default;