// _runtime/04350_subWeeks.js
import module_3915_mod from "metro/03915__.js";
import module_4079_mod from "metro/04079__.js";
import requiredArgs_mod from "03912_requiredArgs.js";

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let module_4079 = module_4079_mod;
if (!module_4079) {
  const obj2 = { default: module_4079 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4079;
}
module_4079 = tmp5;
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
  return module_4079.default(arg0, -module_3915.default(arg1));
};
export default exports.default;