// _runtime/04640_nextDay.js
import module_4400_mod from "metro/04400__.js";
import module_4515_mod from "metro/04515__.js";
import requiredArgs_mod from "04253_requiredArgs.js";

let module_4400 = module_4400_mod;
if (!module_4400) {
  const obj = { default: module_4400 };
  let tmp3 = obj;
} else {
  tmp3 = module_4400;
}
module_4400 = tmp3;
let module_4515 = module_4515_mod;
if (!module_4515) {
  const obj2 = { default: module_4515 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4515;
}
module_4515 = tmp5;
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
  const diff = arg1 - module_4515.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4400.default(arg0, sum);
};
export default exports.default;