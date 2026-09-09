// === Module 3916: ? ===

// Module 3916
import module_3914 from "module_3914" /* 3914 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3914) {
  let obj = { default: module_3914 };
  let tmp3 = obj;
} else {
  tmp3 = module_3914;
}
module_3914 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3914.default(arg0, Date.now(), arg1);
};
export default exports.default;