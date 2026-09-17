// === Module 4126: previousDay ===

// Module 4126 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3729 */;
import module_3991_mod from "module_3991" /* 3991 */;
import subDays_mod from "subDays" /* 4099 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_3991 = module_3991_mod;
if (!module_3991) {
  const obj2 = { default: module_3991 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3991;
}
module_3991 = tmp5;
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
  const diff = module_3991.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;