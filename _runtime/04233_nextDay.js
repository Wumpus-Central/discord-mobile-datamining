// === Module 4233: nextDay ===

// Module 4233 (nextDay)
import module_3993_mod from "module_3993" /* 3993 */;
import module_4108_mod from "module_4108" /* 4108 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj = { default: module_3993 };
  let tmp3 = obj;
} else {
  tmp3 = module_3993;
}
module_3993 = tmp3;
let module_4108 = module_4108_mod;
if (!module_4108) {
  const obj2 = { default: module_4108 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4108;
}
module_4108 = tmp5;
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
  const diff = arg1 - module_4108.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3993.default(arg0, sum);
};
export default exports.default;