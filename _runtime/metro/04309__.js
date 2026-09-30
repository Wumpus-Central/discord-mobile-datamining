// === Module 4309: ? ===

// Module 4309
import module_4301_mod from "module_4301" /* 4301 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4301 = module_4301_mod;
if (!module_4301) {
  const obj = { default: module_4301 };
  let tmp3 = obj;
} else {
  tmp3 = module_4301;
}
module_4301 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4301.default(Date.now(), arg0);
};
export default exports.default;