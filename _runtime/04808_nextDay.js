// === Module 4808: nextDay ===

// Module 4808 (nextDay)
import module_4568_mod from "module_4568" /* 4568 */;
import module_4683_mod from "module_4683" /* 4683 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj = { default: module_4568 };
  let tmp3 = obj;
} else {
  tmp3 = module_4568;
}
module_4568 = tmp3;
let module_4683 = module_4683_mod;
if (!module_4683) {
  const obj2 = { default: module_4683 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4683;
}
module_4683 = tmp5;
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
  const diff = arg1 - module_4683.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4568.default(arg0, sum);
};
export default exports.default;