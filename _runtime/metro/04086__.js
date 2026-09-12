// === Module 4086: ? ===

// Module 4086
import module_4078 from "module_4078" /* 4078 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_4078) {
  let obj = { default: module_4078 };
  let tmp3 = obj;
} else {
  tmp3 = module_4078;
}
module_4078 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4078.default(Date.now(), arg0);
};
export default exports.default;