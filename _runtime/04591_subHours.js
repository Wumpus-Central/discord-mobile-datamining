// _runtime/04591_subHours.js
import module_4310_mod from "metro/04310__.js";
import requiredArgs_mod from "04157_requiredArgs.js";
import module_4160_mod from "metro/04160__.js";

let module_4310 = module_4310_mod;
if (!module_4310) {
  const obj = { default: module_4310 };
  let tmp3 = obj;
} else {
  tmp3 = module_4310;
}
module_4310 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj3 = { default: module_4160 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4160;
}
module_4160 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4310.default(arg0, -module_4160.default(arg1));
};
export default exports.default;