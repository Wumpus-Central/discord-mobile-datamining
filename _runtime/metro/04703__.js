// === Module 4703: ? ===

// Module 4703
import module_4702_mod from "module_4702" /* 4702 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4702 = module_4702_mod;
if (!module_4702) {
  const obj = { default: module_4702 };
  let tmp3 = obj;
} else {
  tmp3 = module_4702;
}
module_4702 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4702.default(arg0) / 1000);
};
export default exports.default;