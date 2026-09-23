// _runtime/04346_subHours.js
import module_4065_mod from "metro/04065__.js";
import requiredArgs_mod from "03912_requiredArgs.js";
import module_3915_mod from "metro/03915__.js";

let module_4065 = module_4065_mod;
if (!module_4065) {
  const obj = { default: module_4065 };
  let tmp3 = obj;
} else {
  tmp3 = module_4065;
}
module_4065 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4065.default(arg0, -module_3915.default(arg1));
};
export default exports.default;