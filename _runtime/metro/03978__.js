// === Module 3978: ? ===

// Module 3978
import module_3976_mod from "module_3976" /* 3976 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3976 = module_3976_mod;
if (!module_3976) {
  const obj = { default: module_3976 };
  let tmp3 = obj;
} else {
  tmp3 = module_3976;
}
module_3976 = tmp3;
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
  return module_3976.default(arg0, Date.now(), arg1);
};
export default exports.default;