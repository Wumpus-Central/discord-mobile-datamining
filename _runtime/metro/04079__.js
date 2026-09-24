// _runtime/metro/04079__.js
import module_3917_mod from "03917__.js";
import module_4062_mod from "04062__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4062 = module_4062_mod;
if (!module_4062) {
  const obj2 = { default: module_4062 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4062;
}
module_4062 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4062.default(arg0, 3 * module_3917.default(arg1));
};
export default exports.default;