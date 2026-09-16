// === Module 4114: nextDay ===

// Module 4114 (nextDay)
import module_3874_mod from "module_3874" /* 3874 */;
import module_3989_mod from "module_3989" /* 3989 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
let module_3989 = module_3989_mod;
if (!module_3989) {
  const obj2 = { default: module_3989 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3989;
}
module_3989 = tmp5;
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
  const diff = arg1 - module_3989.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3874.default(arg0, sum);
};
export default exports.default;