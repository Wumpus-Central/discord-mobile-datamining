// === Module 4484: ? ===

// Module 4484
import module_4482_mod from "module_4482" /* 4482 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4482 = module_4482_mod;
if (!module_4482) {
  const obj = { default: module_4482 };
  let tmp3 = obj;
} else {
  tmp3 = module_4482;
}
module_4482 = tmp3;
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
  return module_4482.default(arg0, Date.now(), arg1);
};
export default exports.default;