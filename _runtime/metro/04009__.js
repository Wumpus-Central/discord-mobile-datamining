// === Module 4009: ? ===

// Module 4009
import module_4001 from "module_4001" /* 4001 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_4001) {
  let obj = { default: module_4001 };
  let tmp3 = obj;
} else {
  tmp3 = module_4001;
}
module_4001 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4001.default(Date.now(), arg0);
};
export default exports.default;