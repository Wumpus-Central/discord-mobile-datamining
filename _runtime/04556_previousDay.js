// _runtime/04556_previousDay.js
import requiredArgs_mod from "04159_requiredArgs.js";
import module_4421_mod from "metro/04421__.js";
import subDays_mod from "04529_subDays.js";

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4421 = module_4421_mod;
if (!module_4421) {
  const obj2 = { default: module_4421 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4421;
}
module_4421 = tmp5;
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
  const diff = module_4421.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;