// === Module 4029: ? ===

// Module 4029
import module_3811 from "module_3811" /* 3811 */;
import module_3844 from "module_3844" /* 3844 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3811) {
  let obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
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

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3844.default(arg0, module_3811.default(Date.now(), 1));
};
export default exports.default;