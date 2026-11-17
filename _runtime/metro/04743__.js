// _runtime/metro/04743__.js
import module_4593_mod from "04593__.js";
import module_4744_mod from "04744__.js";
import requiredArgs_mod from "../04590_requiredArgs.js";

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let module_4744 = module_4744_mod;
if (!module_4744) {
  const obj2 = { default: module_4744 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4744;
}
module_4744 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4744.default(interval, module_4593.default(arg1) * c3);
};
export default exports.default;