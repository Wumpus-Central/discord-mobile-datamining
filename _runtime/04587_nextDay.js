// _runtime/04587_nextDay.js
import module_4347_mod from "metro/04347__.js";
import module_4462_mod from "metro/04462__.js";
import requiredArgs_mod from "04200_requiredArgs.js";

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