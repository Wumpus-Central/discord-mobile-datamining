// === Module 4299: nextDay ===

// Module 4299 (nextDay)
import module_4059_mod from "module_4059" /* 4059 */;
import module_4174_mod from "module_4174" /* 4174 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj = { default: module_4059 };
  let tmp3 = obj;
} else {
  tmp3 = module_4059;
}
module_4059 = tmp3;
let module_4174 = module_4174_mod;
if (!module_4174) {
  const obj2 = { default: module_4174 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4174;
}
module_4174 = tmp5;
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
  const diff = arg1 - module_4174.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4059.default(arg0, sum);
};
export default exports.default;