// _runtime/04642_nextDay.js
import module_4402_mod from "metro/04402__.js";
import module_4517_mod from "metro/04517__.js";
import requiredArgs_mod from "04255_requiredArgs.js";

let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj = { default: module_4402 };
  let tmp3 = obj;
} else {
  tmp3 = module_4402;
}
module_4402 = tmp3;
let module_4517 = module_4517_mod;
if (!module_4517) {
  const obj2 = { default: module_4517 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4517;
}
module_4517 = tmp5;
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
  const diff = arg1 - module_4517.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4402.default(arg0, sum);
};
export default exports.default;