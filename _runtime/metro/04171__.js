// === Module 4171: ? ===

// Module 4171
import module_4169_mod from "module_4169" /* 4169 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4169 = module_4169_mod;
if (!module_4169) {
  const obj = { default: module_4169 };
  let tmp3 = obj;
} else {
  tmp3 = module_4169;
}
module_4169 = tmp3;
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
  return module_4169.default(arg0, Date.now(), arg1);
};
export default exports.default;