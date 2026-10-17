// _runtime/04682_nextDay.js
import module_4442_mod from "metro/04442__.js";
import module_4557_mod from "metro/04557__.js";
import requiredArgs_mod from "04295_requiredArgs.js";

let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj = { default: module_4442 };
  let tmp3 = obj;
} else {
  tmp3 = module_4442;
}
module_4442 = tmp3;
let module_4557 = module_4557_mod;
if (!module_4557) {
  const obj2 = { default: module_4557 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4557;
}
module_4557 = tmp5;
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
  const diff = arg1 - module_4557.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4442.default(arg0, sum);
};
export default exports.default;