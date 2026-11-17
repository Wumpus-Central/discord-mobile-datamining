// === Module 4947: ? ===

// Module 4947
import module_4939_mod from "module_4939" /* 4939 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4939 = module_4939_mod;
if (!module_4939) {
  const obj = { default: module_4939 };
  let tmp3 = obj;
} else {
  tmp3 = module_4939;
}
module_4939 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4939.default(Date.now(), arg0);
};
export default exports.default;