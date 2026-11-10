// === Module 4810: nextDay ===

// Module 4810 (nextDay)
import module_4570_mod from "module_4570" /* 4570 */;
import module_4685_mod from "module_4685" /* 4685 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4570 = module_4570_mod;
if (!module_4570) {
  const obj = { default: module_4570 };
  let tmp3 = obj;
} else {
  tmp3 = module_4570;
}
module_4570 = tmp3;
let module_4685 = module_4685_mod;
if (!module_4685) {
  const obj2 = { default: module_4685 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4685;
}
module_4685 = tmp5;
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
  const diff = arg1 - module_4685.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4570.default(arg0, sum);
};
export default exports.default;