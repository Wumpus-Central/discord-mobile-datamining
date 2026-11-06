// === Module 4702: ? ===

// Module 4702
import module_4698_mod from "module_4698" /* 4698 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4698 = module_4698_mod;
if (!module_4698) {
  const obj = { default: module_4698 };
  let tmp3 = obj;
} else {
  tmp3 = module_4698;
}
module_4698 = tmp3;
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
  return module_4698.default(arg0, Date.now(), arg1);
};
export default exports.default;