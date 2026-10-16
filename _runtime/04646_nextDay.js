// === Module 4646: nextDay ===

// Module 4646 (nextDay)
import module_4406_mod from "module_4406" /* 4406 */;
import module_4521_mod from "module_4521" /* 4521 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj = { default: module_4406 };
  let tmp3 = obj;
} else {
  tmp3 = module_4406;
}
module_4406 = tmp3;
let module_4521 = module_4521_mod;
if (!module_4521) {
  const obj2 = { default: module_4521 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4521;
}
module_4521 = tmp5;
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
  const diff = arg1 - module_4521.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4406.default(arg0, sum);
};
export default exports.default;