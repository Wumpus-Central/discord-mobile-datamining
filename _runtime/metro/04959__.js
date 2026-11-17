// === Module 4959: ? ===

// Module 4959
import module_4770_mod from "module_4770" /* 4770 */;
import subDays_mod from "subDays" /* 4960 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4770 = module_4770_mod;
if (!module_4770) {
  const obj = { default: module_4770 };
  let tmp3 = obj;
} else {
  tmp3 = module_4770;
}
module_4770 = tmp3;
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
  return module_4770.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;