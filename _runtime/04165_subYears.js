// _runtime/04165_subYears.js
import module_3729_mod from "metro/03729__.js";
import module_3894_mod from "metro/03894__.js";
import requiredArgs_mod from "03726_requiredArgs.js";

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let module_3894 = module_3894_mod;
if (!module_3894) {
  const obj2 = { default: module_3894 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3894;
}
module_3894 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3894.default(arg0, -module_3729.default(arg1));
};
export default exports.default;