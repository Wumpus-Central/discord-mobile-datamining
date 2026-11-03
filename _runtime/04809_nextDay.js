// === Module 4809: nextDay ===

// Module 4809 (nextDay)
import module_4569_mod from "module_4569" /* 4569 */;
import module_4684_mod from "module_4684" /* 4684 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj = { default: module_4569 };
  let tmp3 = obj;
} else {
  tmp3 = module_4569;
}
module_4569 = tmp3;
let module_4684 = module_4684_mod;
if (!module_4684) {
  const obj2 = { default: module_4684 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4684;
}
module_4684 = tmp5;
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
  const diff = arg1 - module_4684.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4569.default(arg0, sum);
};
export default exports.default;