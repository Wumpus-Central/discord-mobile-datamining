// === Module 4674: ? ===

// Module 4674
import module_4672_mod from "module_4672" /* 4672 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4672 = module_4672_mod;
if (!module_4672) {
  const obj = { default: module_4672 };
  let tmp3 = obj;
} else {
  tmp3 = module_4672;
}
module_4672 = tmp3;
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
  return module_4672.default(arg0, Date.now(), arg1);
};
export default exports.default;