// === Module 4024: ? ===

// Module 4024
import module_4016 from "module_4016" /* 4016 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4016) {
  let obj = { default: module_4016 };
  let tmp3 = obj;
} else {
  tmp3 = module_4016;
}
module_4016 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4016.default(Date.now(), arg0);
};
export default exports.default;