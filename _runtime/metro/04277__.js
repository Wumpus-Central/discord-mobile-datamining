// === Module 4277: ? ===

// Module 4277
import module_4263_mod from "module_4263" /* 4263 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4263 = module_4263_mod;
if (!module_4263) {
  const obj = { default: module_4263 };
  let tmp3 = obj;
} else {
  tmp3 = module_4263;
}
module_4263 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4263.default(arg0, Date.now(), arg1);
};
export default exports.default;