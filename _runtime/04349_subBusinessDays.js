// _runtime/04349_subBusinessDays.js
import module_4065_mod from "metro/04065__.js";
import requiredArgs_mod from "03916_requiredArgs.js";
import module_3919_mod from "metro/03919__.js";

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
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj3 = { default: module_3919 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3919;
}
module_3919 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4065.default(arg0, -module_3919.default(arg1));
};
export default exports.default;