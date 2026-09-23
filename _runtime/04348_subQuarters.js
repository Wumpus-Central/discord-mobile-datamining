// _runtime/04348_subQuarters.js
import module_3915_mod from "metro/03915__.js";
import module_4077_mod from "metro/04077__.js";
import requiredArgs_mod from "03912_requiredArgs.js";

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let module_4077 = module_4077_mod;
if (!module_4077) {
  const obj2 = { default: module_4077 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4077;
}
module_4077 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4077.default(arg0, -module_3915.default(arg1));
};
export default exports.default;