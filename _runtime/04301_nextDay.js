// _runtime/04301_nextDay.js
import module_4061_mod from "metro/04061__.js";
import module_4176_mod from "metro/04176__.js";
import requiredArgs_mod from "03914_requiredArgs.js";

let module_4061 = module_4061_mod;
if (!module_4061) {
  const obj = { default: module_4061 };
  let tmp3 = obj;
} else {
  tmp3 = module_4061;
}
module_4061 = tmp3;
let module_4176 = module_4176_mod;
if (!module_4176) {
  const obj2 = { default: module_4176 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4176;
}
module_4176 = tmp5;
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
  const diff = arg1 - module_4176.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4061.default(arg0, sum);
};
export default exports.default;