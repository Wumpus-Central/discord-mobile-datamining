// === Module 3997: ? ===

// Module 3997
import module_3998 from "module_3998" /* 3998 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3998) {
  let obj = { default: module_3998 };
  let tmp3 = obj;
} else {
  tmp3 = module_3998;
}
module_3998 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3998.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;