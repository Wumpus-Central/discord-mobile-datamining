// === Module 4025: ? ===

// Module 4025
import module_4011 from "module_4011" /* 4011 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4011) {
  let obj = { default: module_4011 };
  let tmp3 = obj;
} else {
  tmp3 = module_4011;
}
module_4011 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4011.default(arg0, Date.now(), arg1);
};
export default exports.default;