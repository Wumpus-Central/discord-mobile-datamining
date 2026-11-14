// === Module 4973: nextDay ===

// Module 4973 (nextDay)
import module_4733_mod from "module_4733" /* 4733 */;
import module_4848_mod from "module_4848" /* 4848 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let module_4733 = module_4733_mod;
if (!module_4733) {
  const obj = { default: module_4733 };
  let tmp3 = obj;
} else {
  tmp3 = module_4733;
}
module_4733 = tmp3;
let module_4848 = module_4848_mod;
if (!module_4848) {
  const obj2 = { default: module_4848 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4848;
}
module_4848 = tmp5;
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
  const diff = arg1 - module_4848.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4733.default(arg0, sum);
};
export default exports.default;