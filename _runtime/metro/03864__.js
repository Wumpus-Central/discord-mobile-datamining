// === Module 3864: ? ===

// Module 3864
import module_3699 from "module_3699" /* 3699 */;
import module_3844 from "module_3844" /* 3844 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3844) {
  obj = { default: module_3844 };
  let tmp5 = obj;
} else {
  tmp5 = module_3844;
}
module_3844 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3844.default(interval, 12 * module_3699.default(arg1));
};
export default exports.default;