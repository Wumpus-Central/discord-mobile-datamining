// === Module 4072: ? ===

// Module 4072
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

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4073.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;