// === Module 4023: ? ===

// Module 4023
import module_4015 from "module_4015" /* 4015 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4015) {
  let obj = { default: module_4015 };
  let tmp3 = obj;
} else {
  tmp3 = module_4015;
}
module_4015 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4015.default(Date.now(), arg0);
};
export default exports.default;