// === Module 4676: nextDay ===

// Module 4676 (nextDay)
import module_4436_mod from "module_4436" /* 4436 */;
import module_4551_mod from "module_4551" /* 4551 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj = { default: module_4436 };
  let tmp3 = obj;
} else {
  tmp3 = module_4436;
}
module_4436 = tmp3;
let module_4551 = module_4551_mod;
if (!module_4551) {
  const obj2 = { default: module_4551 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4551;
}
module_4551 = tmp5;
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
  const diff = arg1 - module_4551.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4436.default(arg0, sum);
};
export default exports.default;