// === Module 4345: previousDay ===

// Module 4345 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3948 */;
import module_4210_mod from "module_4210" /* 4210 */;
import subDays_mod from "subDays" /* 4318 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4210 = module_4210_mod;
if (!module_4210) {
  const obj2 = { default: module_4210 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4210;
}
module_4210 = tmp5;
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
  const diff = module_4210.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;