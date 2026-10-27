// === Module 4625: ? ===

// Module 4625
import module_4436_mod from "module_4436" /* 4436 */;
import subDays_mod from "subDays" /* 4626 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj = { default: module_4436 };
  let tmp3 = obj;
} else {
  tmp3 = module_4436;
}
module_4436 = tmp3;
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
  return module_4436.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;