// === Module 4451: ? ===

// Module 4451
import module_4447_mod from "module_4447" /* 4447 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4447 = module_4447_mod;
if (!module_4447) {
  const obj = { default: module_4447 };
  let tmp3 = obj;
} else {
  tmp3 = module_4447;
}
module_4447 = tmp3;
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
  return module_4447.default(arg0, Date.now(), arg1);
};
export default exports.default;