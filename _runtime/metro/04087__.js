// === Module 4087: ? ===

// Module 4087
import module_4073 from "module_4073" /* 4073 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_4073) {
  let obj = { default: module_4073 };
  let tmp3 = obj;
} else {
  tmp3 = module_4073;
}
module_4073 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4073.default(arg0, Date.now(), arg1);
};
export default exports.default;