// === Module 4209: previousDay ===

// Module 4209 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3812 */;
import module_4074_mod from "module_4074" /* 4074 */;
import subDays_mod from "subDays" /* 4182 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4074 = module_4074_mod;
if (!module_4074) {
  const obj2 = { default: module_4074 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4074;
}
module_4074 = tmp5;
let subDays = subDays_mod;
if (!subDays) {
  const obj3 = { default: subDays };
  let tmp7 = obj3;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_4074.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;