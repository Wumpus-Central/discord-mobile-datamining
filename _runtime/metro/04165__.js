// === Module 4165: ? ===

// Module 4165
import module_4161_mod from "module_4161" /* 4161 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4161 = module_4161_mod;
if (!module_4161) {
  const obj = { default: module_4161 };
  let tmp3 = obj;
} else {
  tmp3 = module_4161;
}
module_4161 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4161.default(arg0, Date.now(), arg1);
};
export default exports.default;