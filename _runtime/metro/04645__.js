// === Module 4645: ? ===

// Module 4645
import module_4634_mod from "module_4634" /* 4634 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4634 = module_4634_mod;
if (!module_4634) {
  const obj = { default: module_4634 };
  let tmp3 = obj;
} else {
  tmp3 = module_4634;
}
module_4634 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4634.default(Date.now(), arg0);
};
export default exports.default;