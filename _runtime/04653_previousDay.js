// === Module 4653: previousDay ===

// Module 4653 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import module_4518_mod from "module_4518" /* 4518 */;
import subDays_mod from "subDays" /* 4626 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4518 = module_4518_mod;
if (!module_4518) {
  const obj2 = { default: module_4518 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4518;
}
module_4518 = tmp5;
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
  const diff = module_4518.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;