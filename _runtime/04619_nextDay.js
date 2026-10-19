// === Module 4619: nextDay ===

// Module 4619 (nextDay)
import module_4379_mod from "module_4379" /* 4379 */;
import module_4494_mod from "module_4494" /* 4494 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4379 = module_4379_mod;
if (!module_4379) {
  const obj = { default: module_4379 };
  let tmp3 = obj;
} else {
  tmp3 = module_4379;
}
module_4379 = tmp3;
let module_4494 = module_4494_mod;
if (!module_4494) {
  const obj2 = { default: module_4494 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4494;
}
module_4494 = tmp5;
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
  const diff = arg1 - module_4494.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4379.default(arg0, sum);
};
export default exports.default;