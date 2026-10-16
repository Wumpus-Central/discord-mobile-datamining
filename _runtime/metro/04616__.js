// === Module 4616: ? ===

// Module 4616
import module_4608_mod from "module_4608" /* 4608 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4608 = module_4608_mod;
if (!module_4608) {
  const obj = { default: module_4608 };
  let tmp3 = obj;
} else {
  tmp3 = module_4608;
}
module_4608 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4608.default(Date.now(), arg0);
};
export default exports.default;