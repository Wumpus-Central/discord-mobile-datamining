// _runtime/04352_subWeeks.js
import module_3917_mod from "metro/03917__.js";
import module_4081_mod from "metro/04081__.js";
import requiredArgs_mod from "03914_requiredArgs.js";

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj2 = { default: module_4081 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4081;
}
module_4081 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4081.default(arg0, -module_3917.default(arg1));
};
export default exports.default;