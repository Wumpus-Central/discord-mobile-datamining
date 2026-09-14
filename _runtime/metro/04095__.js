// === Module 4095: ? ===

// Module 4095
import module_3906_mod from "module_3906" /* 3906 */;
import subDays_mod from "subDays" /* 4096 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3906 = module_3906_mod;
if (!module_3906) {
  const obj = { default: module_3906 };
  let tmp3 = obj;
} else {
  tmp3 = module_3906;
}
module_3906 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3906.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;