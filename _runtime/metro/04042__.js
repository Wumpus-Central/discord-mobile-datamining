// === Module 4042: ? ===

// Module 4042
import module_4043 from "module_4043" /* 4043 */;
import requiredArgs from "requiredArgs" /* 3696 */;

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

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4043.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;