// === Module 3981: ? ===

// Module 3981
import module_3979_mod from "module_3979" /* 3979 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3979 = module_3979_mod;
if (!module_3979) {
  const obj = { default: module_3979 };
  let tmp3 = obj;
} else {
  tmp3 = module_3979;
}
module_3979 = tmp3;
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
  return module_3979.default(arg0, Date.now(), arg1);
};
export default exports.default;