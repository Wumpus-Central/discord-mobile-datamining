// === Module 4677: nextDay ===

// Module 4677 (nextDay)
import module_4437_mod from "module_4437" /* 4437 */;
import module_4552_mod from "module_4552" /* 4552 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4437 = module_4437_mod;
if (!module_4437) {
  const obj = { default: module_4437 };
  let tmp3 = obj;
} else {
  tmp3 = module_4437;
}
module_4437 = tmp3;
let module_4552 = module_4552_mod;
if (!module_4552) {
  const obj2 = { default: module_4552 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4552;
}
module_4552 = tmp5;
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
  const diff = arg1 - module_4552.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4437.default(arg0, sum);
};
export default exports.default;