// === Module 4869: ? ===

// Module 4869
import module_4868_mod from "module_4868" /* 4868 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4868 = module_4868_mod;
if (!module_4868) {
  const obj = { default: module_4868 };
  let tmp3 = obj;
} else {
  tmp3 = module_4868;
}
module_4868 = tmp3;
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
  return Math.floor(module_4868.default(arg0) / 1000);
};
export default exports.default;