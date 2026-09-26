// === Module 4170: ? ===

// Module 4170
import module_4166_mod from "module_4166" /* 4166 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4166 = module_4166_mod;
if (!module_4166) {
  const obj = { default: module_4166 };
  let tmp3 = obj;
} else {
  tmp3 = module_4166;
}
module_4166 = tmp3;
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
  return module_4166.default(arg0, Date.now(), arg1);
};
export default exports.default;