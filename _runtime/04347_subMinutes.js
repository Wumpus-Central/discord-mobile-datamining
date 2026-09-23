// _runtime/04347_subMinutes.js
import module_4076_mod from "metro/04076__.js";
import requiredArgs_mod from "03912_requiredArgs.js";
import module_3915_mod from "metro/03915__.js";

let module_4076 = module_4076_mod;
if (!module_4076) {
  const obj = { default: module_4076 };
  let tmp3 = obj;
} else {
  tmp3 = module_4076;
}
module_4076 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj3 = { default: module_3915 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3915;
}
module_3915 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4076.default(arg0, -module_3915.default(arg1));
};
export default exports.default;