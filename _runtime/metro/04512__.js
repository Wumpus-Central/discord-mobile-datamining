// === Module 4512: ? ===

// Module 4512
import module_4501_mod from "module_4501" /* 4501 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4501 = module_4501_mod;
if (!module_4501) {
  const obj = { default: module_4501 };
  let tmp3 = obj;
} else {
  tmp3 = module_4501;
}
module_4501 = tmp3;
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
  return module_4501.default(Date.now(), arg0);
};
export default exports.default;