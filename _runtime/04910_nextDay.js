// === Module 4910: nextDay ===

// Module 4910 (nextDay)
import module_4670_mod from "module_4670" /* 4670 */;
import module_4785_mod from "module_4785" /* 4785 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4670 = module_4670_mod;
if (!module_4670) {
  const obj = { default: module_4670 };
  let tmp3 = obj;
} else {
  tmp3 = module_4670;
}
module_4670 = tmp3;
let module_4785 = module_4785_mod;
if (!module_4785) {
  const obj2 = { default: module_4785 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4785;
}
module_4785 = tmp5;
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
  const diff = arg1 - module_4785.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4670.default(arg0, sum);
};
export default exports.default;