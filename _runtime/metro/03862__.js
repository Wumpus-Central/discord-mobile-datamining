// === Module 3862: ? ===

// Module 3862
import module_3699 from "module_3699" /* 3699 */;
import module_3850 from "module_3850" /* 3850 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3850) {
  obj = { default: module_3850 };
  let tmp5 = obj;
} else {
  tmp5 = module_3850;
}
module_3850 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3850.default(interval, 1000 * module_3699.default(arg1));
};
export default exports.default;