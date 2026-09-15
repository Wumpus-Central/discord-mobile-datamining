// _runtime/04163_subHours.js
import module_3882_mod from "metro/03882__.js";
import requiredArgs_mod from "03729_requiredArgs.js";
import module_3732_mod from "metro/03732__.js";

let module_3882 = module_3882_mod;
if (!module_3882) {
  const obj = { default: module_3882 };
  let tmp3 = obj;
} else {
  tmp3 = module_3882;
}
module_3882 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj3 = { default: module_3732 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3732;
}
module_3732 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3882.default(arg0, -module_3732.default(arg1));
};
export default exports.default;