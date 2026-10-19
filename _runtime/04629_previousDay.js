// _runtime/04629_previousDay.js
import requiredArgs_mod from "04232_requiredArgs.js";
import module_4494_mod from "metro/04494__.js";
import subDays_mod from "04602_subDays.js";

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4494 = module_4494_mod;
if (!module_4494) {
  const obj2 = { default: module_4494 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4494;
}
module_4494 = tmp5;
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
  const diff = module_4494.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;