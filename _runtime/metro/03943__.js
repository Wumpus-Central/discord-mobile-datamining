// === Module 3943: ? ===

// Module 3943
import module_3942 from "module_3942" /* 3942 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3942) {
  let obj = { default: module_3942 };
  let tmp3 = obj;
} else {
  tmp3 = module_3942;
}
module_3942 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3942.default(arg0) / 1000);
};
export default exports.default;