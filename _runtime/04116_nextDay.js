// === Module 4116: nextDay ===

// Module 4116 (nextDay)
import module_3876_mod from "module_3876" /* 3876 */;
import module_3991_mod from "module_3991" /* 3991 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
let module_3991 = module_3991_mod;
if (!module_3991) {
  const obj2 = { default: module_3991 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3991;
}
module_3991 = tmp5;
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
  const diff = arg1 - module_3991.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3876.default(arg0, sum);
};
export default exports.default;