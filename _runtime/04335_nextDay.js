// _runtime/04335_nextDay.js
import module_4095_mod from "metro/04095__.js";
import module_4210_mod from "metro/04210__.js";
import requiredArgs_mod from "03948_requiredArgs.js";

let module_4095 = module_4095_mod;
if (!module_4095) {
  const obj = { default: module_4095 };
  let tmp3 = obj;
} else {
  tmp3 = module_4095;
}
module_4095 = tmp3;
let module_4210 = module_4210_mod;
if (!module_4210) {
  const obj2 = { default: module_4210 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4210;
}
module_4210 = tmp5;
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
  const diff = arg1 - module_4210.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4095.default(arg0, sum);
};
export default exports.default;