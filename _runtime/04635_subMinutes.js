// _runtime/04635_subMinutes.js
import module_4364_mod from "metro/04364__.js";
import requiredArgs_mod from "04200_requiredArgs.js";
import module_4203_mod from "metro/04203__.js";

let module_4364 = module_4364_mod;
if (!module_4364) {
  const obj = { default: module_4364 };
  let tmp3 = obj;
} else {
  tmp3 = module_4364;
}
module_4364 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj3 = { default: module_4203 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4203;
}
module_4203 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4364.default(arg0, -module_4203.default(arg1));
};
export default exports.default;