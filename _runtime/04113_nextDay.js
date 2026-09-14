// === Module 4113: nextDay ===

// Module 4113 (nextDay)
import module_3873_mod from "module_3873" /* 3873 */;
import module_3988_mod from "module_3988" /* 3988 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3873 = module_3873_mod;
if (!module_3873) {
  const obj = { default: module_3873 };
  let tmp3 = obj;
} else {
  tmp3 = module_3873;
}
module_3873 = tmp3;
let module_3988 = module_3988_mod;
if (!module_3988) {
  const obj2 = { default: module_3988 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3988;
}
module_3988 = tmp5;
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
  const diff = arg1 - module_3988.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3873.default(arg0, sum);
};
export default exports.default;