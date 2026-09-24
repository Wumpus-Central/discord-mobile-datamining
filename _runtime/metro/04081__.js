// _runtime/metro/04081__.js
import module_3917_mod from "03917__.js";
import module_4061_mod from "04061__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4061 = module_4061_mod;
if (!module_4061) {
  const obj2 = { default: module_4061 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4061;
}
module_4061 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4061.default(arg0, 7 * module_3917.default(arg1));
};
export default exports.default;