// === Module 4055: ? ===

// Module 4055
import module_4047 from "module_4047" /* 4047 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_4047) {
  let obj = { default: module_4047 };
  let tmp3 = obj;
} else {
  tmp3 = module_4047;
}
module_4047 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4047.default(Date.now(), arg0);
};
export default exports.default;