// === Module 4199: nextDay ===

// Module 4199 (nextDay)
import module_3959_mod from "module_3959" /* 3959 */;
import module_4074_mod from "module_4074" /* 4074 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3959 = module_3959_mod;
if (!module_3959) {
  const obj = { default: module_3959 };
  let tmp3 = obj;
} else {
  tmp3 = module_3959;
}
module_3959 = tmp3;
let module_4074 = module_4074_mod;
if (!module_4074) {
  const obj2 = { default: module_4074 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4074;
}
module_4074 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_4074.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3959.default(arg0, sum);
};
export default exports.default;