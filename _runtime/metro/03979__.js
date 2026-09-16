// === Module 3979: ? ===

// Module 3979
import module_3977_mod from "module_3977" /* 3977 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3977 = module_3977_mod;
if (!module_3977) {
  const obj = { default: module_3977 };
  let tmp3 = obj;
} else {
  tmp3 = module_3977;
}
module_3977 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3977.default(arg0, Date.now(), arg1);
};
export default exports.default;