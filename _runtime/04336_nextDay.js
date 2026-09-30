// === Module 4336: nextDay ===

// Module 4336 (nextDay)
import module_4096_mod from "module_4096" /* 4096 */;
import module_4211_mod from "module_4211" /* 4211 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4096 = module_4096_mod;
if (!module_4096) {
  const obj = { default: module_4096 };
  let tmp3 = obj;
} else {
  tmp3 = module_4096;
}
module_4096 = tmp3;
let module_4211 = module_4211_mod;
if (!module_4211) {
  const obj2 = { default: module_4211 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4211;
}
module_4211 = tmp5;
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
  const diff = arg1 - module_4211.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4096.default(arg0, sum);
};
export default exports.default;