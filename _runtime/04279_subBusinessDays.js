// _runtime/04279_subBusinessDays.js
import module_3995_mod from "metro/03995__.js";
import requiredArgs_mod from "03846_requiredArgs.js";
import module_3849_mod from "metro/03849__.js";

let module_3995 = module_3995_mod;
if (!module_3995) {
  const obj = { default: module_3995 };
  let tmp3 = obj;
} else {
  tmp3 = module_3995;
}
module_3995 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj3 = { default: module_3849 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3849;
}
module_3849 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3995.default(arg0, -module_3849.default(arg1));
};
export default exports.default;