// === Module 4685: previousDay ===

// Module 4685 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 4288 */;
import module_4550_mod from "module_4550" /* 4550 */;
import subDays_mod from "subDays" /* 4658 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4550 = module_4550_mod;
if (!module_4550) {
  const obj2 = { default: module_4550 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4550;
}
module_4550 = tmp5;
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
  const diff = module_4550.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;