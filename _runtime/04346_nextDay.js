// _runtime/04346_nextDay.js
import module_4106_mod from "metro/04106__.js";
import module_4221_mod from "metro/04221__.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj = { default: module_4106 };
  let tmp3 = obj;
} else {
  tmp3 = module_4106;
}
module_4106 = tmp3;
let module_4221 = module_4221_mod;
if (!module_4221) {
  const obj2 = { default: module_4221 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4221;
}
module_4221 = tmp5;
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
  const diff = arg1 - module_4221.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4106.default(arg0, sum);
};
export default exports.default;