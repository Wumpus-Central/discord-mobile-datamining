// === Module 4063: ? ===

// Module 4063
import module_4059_mod from "module_4059" /* 4059 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj = { default: module_4059 };
  let tmp3 = obj;
} else {
  tmp3 = module_4059;
}
module_4059 = tmp3;
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
  return module_4059.default(arg0, Date.now(), arg1);
};
export default exports.default;