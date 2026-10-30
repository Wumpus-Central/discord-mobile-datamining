// === Module 4659: ? ===

// Module 4659
import module_4470_mod from "module_4470" /* 4470 */;
import subDays_mod from "subDays" /* 4660 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4470 = module_4470_mod;
if (!module_4470) {
  const obj = { default: module_4470 };
  let tmp3 = obj;
} else {
  tmp3 = module_4470;
}
module_4470 = tmp3;
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
  return module_4470.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;