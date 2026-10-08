// === Module 4544: nextDay ===

// Module 4544 (nextDay)
import module_4304_mod from "module_4304" /* 4304 */;
import module_4419_mod from "module_4419" /* 4419 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4304 = module_4304_mod;
if (!module_4304) {
  const obj = { default: module_4304 };
  let tmp3 = obj;
} else {
  tmp3 = module_4304;
}
module_4304 = tmp3;
let module_4419 = module_4419_mod;
if (!module_4419) {
  const obj2 = { default: module_4419 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4419;
}
module_4419 = tmp5;
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
  const diff = arg1 - module_4419.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4304.default(arg0, sum);
};
export default exports.default;