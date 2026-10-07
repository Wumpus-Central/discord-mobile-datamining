// === Module 4320: ? ===

// Module 4320
import module_4309_mod from "module_4309" /* 4309 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4309 = module_4309_mod;
if (!module_4309) {
  const obj = { default: module_4309 };
  let tmp3 = obj;
} else {
  tmp3 = module_4309;
}
module_4309 = tmp3;
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
  return module_4309.default(Date.now(), arg0);
};
export default exports.default;