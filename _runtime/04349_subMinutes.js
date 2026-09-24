// _runtime/04349_subMinutes.js
import module_4078_mod from "metro/04078__.js";
import requiredArgs_mod from "03914_requiredArgs.js";
import module_3917_mod from "metro/03917__.js";

let module_4078 = module_4078_mod;
if (!module_4078) {
  const obj = { default: module_4078 };
  let tmp3 = obj;
} else {
  tmp3 = module_4078;
}
module_4078 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj3 = { default: module_3917 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3917;
}
module_3917 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4078.default(arg0, -module_3917.default(arg1));
};
export default exports.default;