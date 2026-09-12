// === Module 4005: ? ===

// Module 4005
import module_4004 from "module_4004" /* 4004 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_4004) {
  let obj = { default: module_4004 };
  let tmp3 = obj;
} else {
  tmp3 = module_4004;
}
module_4004 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4004.default(arg0) / 1000);
};
export default exports.default;