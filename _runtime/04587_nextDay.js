// === Module 4587: nextDay ===

// Module 4587 (nextDay)
import module_4347_mod from "module_4347" /* 4347 */;
import module_4462_mod from "module_4462" /* 4462 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4347 = module_4347_mod;
if (!module_4347) {
  const obj = { default: module_4347 };
  let tmp3 = obj;
} else {
  tmp3 = module_4347;
}
module_4347 = tmp3;
let module_4462 = module_4462_mod;
if (!module_4462) {
  const obj2 = { default: module_4462 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4462;
}
module_4462 = tmp5;
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
  const diff = arg1 - module_4462.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4347.default(arg0, sum);
};
export default exports.default;