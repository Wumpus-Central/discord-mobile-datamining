// === Module 4411: ? ===

// Module 4411
import module_4409_mod from "module_4409" /* 4409 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj = { default: module_4409 };
  let tmp3 = obj;
} else {
  tmp3 = module_4409;
}
module_4409 = tmp3;
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
  return module_4409.default(arg0, Date.now(), arg1);
};
export default exports.default;