// === Module 4022: ? ===

// Module 4022
import module_4014 from "module_4014" /* 4014 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4014) {
  let obj = { default: module_4014 };
  let tmp3 = obj;
} else {
  tmp3 = module_4014;
}
module_4014 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4014.default(Date.now(), arg0);
};
export default exports.default;