// _runtime/04960_subDays.js
import module_4737_mod from "metro/04737__.js";
import requiredArgs_mod from "04590_requiredArgs.js";
import module_4593_mod from "metro/04593__.js";

let module_4737 = module_4737_mod;
if (!module_4737) {
  const obj = { default: module_4737 };
  let tmp3 = obj;
} else {
  tmp3 = module_4737;
}
module_4737 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj3 = { default: module_4593 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4593;
}
module_4593 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4737.default(arg0, -module_4593.default(arg1));
};
export default exports.default;