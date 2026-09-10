// === Module 4053: ? ===

// Module 4053
import module_4045 from "module_4045" /* 4045 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_4045) {
  let obj = { default: module_4045 };
  let tmp3 = obj;
} else {
  tmp3 = module_4045;
}
module_4045 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4045.default(Date.now(), arg0);
};
export default exports.default;