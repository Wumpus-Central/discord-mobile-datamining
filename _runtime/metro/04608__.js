// === Module 4608: ? ===

// Module 4608
import module_4597_mod from "module_4597" /* 4597 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4597 = module_4597_mod;
if (!module_4597) {
  const obj = { default: module_4597 };
  let tmp3 = obj;
} else {
  tmp3 = module_4597;
}
module_4597 = tmp3;
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
  return module_4597.default(Date.now(), arg0);
};
export default exports.default;